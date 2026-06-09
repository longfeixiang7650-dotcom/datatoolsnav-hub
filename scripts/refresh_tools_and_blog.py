#!/usr/bin/env python3
"""
Refresh 3 refined tools + generate 1 blog post for Data Tools Nav.
Run from ~/datatoolsnav-hub directory.
"""

import json
import os
import re
import subprocess
import sys

os.chdir('/home/edi/datatoolsnav-hub')

# === Read API key ===
QWEN_API_KEY = ""
with open('/home/edi/.hermes/api_keys.env') as f:
    for line in f:
        line = line.strip()
        if line.startswith('QWEN_API_KEY_1='):
            QWEN_API_KEY = line.split('=', 1)[1]
            break

if not QWEN_API_KEY:
    print("ERROR: Could not read QWEN_API_KEY_1")
    sys.exit(1)

QWEN_ENDPOINT = "https://dashscope.aliyuncs.com/compatible-mode/v1"
QWEN_MODEL = "qwen-plus"

# === Read tools.ts ===
with open('app/data/tools.ts', 'r') as f:
    tools_content = f.read()

# === Helper: Call Qwen API ===
def call_qwen(prompt, system_prompt="You are a data analytics expert writing G2-style tool evaluations and blog posts."):
    import urllib.request
    
    data = {
        "model": QWEN_MODEL,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": prompt}
        ],
        "max_tokens": 4096,
        "temperature": 0.8
    }
    
    req = urllib.request.Request(
        f"{QWEN_ENDPOINT}/chat/completions",
        data=json.dumps(data).encode('utf-8'),
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {QWEN_API_KEY}"
        }
    )
    
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            result = json.loads(resp.read())
            return result['choices'][0]['message']['content']
    except Exception as e:
        print(f"API call error: {e}")
        if hasattr(e, 'read'):
            print(e.read().decode())
        return None

# === Double-escape function ===
def escape_dq(s):
    """Escape double quotes for TypeScript string insertion."""
    # First escape backslashes, then double quotes
    return s.replace('\\', '\\\\').replace('"', '\\"')

# === Refresh the 3 refined tools ===
TOOLS_TO_REFRESH = [
    {
        "id": "tableau",
        "name": "Tableau",
        "category": "BI Platforms",
        "existing": {
            "rating": 4.6,
            "reviewCount": 48200,
            "icon": "BarChart3",
        }
    },
    {
        "id": "powerbi",
        "name": "Microsoft Power BI",
        "category": "BI Platforms",
        "existing": {
            "rating": 4.5,
            "reviewCount": 42500,
            "icon": "TrendingUp",
        }
    },
    {
        "id": "looker",
        "name": "Looker Studio (formerly Looker)",
        "category": "BI Platforms",
        "existing": {
            "rating": 4.4,
            "reviewCount": 36800,
            "icon": "Eye",
        }
    }
]

print("=== Refreshing 3 tools ===\n")

for tool_info in TOOLS_TO_REFRESH:
    tool_id = tool_info["id"]
    tool_name = tool_info["name"]
    print(f"--- Refreshing {tool_name} ({tool_id}) ---")
    
    prompt = f"""You are an expert data analytics reviewer writing in G2/Capterra style. Generate an updated, comprehensive review for the data analytics tool "{tool_name}" in JSON format.

Return ONLY valid JSON with these fields:
1. "description": A one-sentence tagline (max 150 chars), e.g. "Enterprise-grade BI platform renowned for intuitive drag-and-drop visualization..."
2. "longDescription": A detailed review (1200-1500 characters) covering: overview, core capabilities, ecosystem/extensibility, governance/administration. SINGLE LINE, no line breaks.
3. "pros": Array of 5-7 specific advantages
4. "cons": Array of 3-4 specific disadvantages
5. "pricing": Brief pricing label like "Contact Sales" or "Free / $10/user/mo"
6. "pricingDetail": 1-2 sentence pricing detail
7. "features": Array of 8 specific features
8. "useCase": 1-2 sentence ideal use case
9. "websiteUrl": Official URL
10. "alternatives": Array of 2-3 alternative tools
11. "scoreBreakdown": Object with "features", "reviews", "momentum", "popularity" (each 0-10)
12. "userQuotes": Array of 3 objects with "role", "company", "quote" fields

Make it realistic, data-driven, and current for 2026. Use real data points where possible. Ratings sourced from G2 (mention 'Ratings sourced from G2')."""

    result = call_qwen(prompt)
    if not result:
        print(f"  FAILED to generate for {tool_name}")
        continue
    
    # Extract JSON from response (handle markdown code blocks)
    json_str = result
    if "```json" in json_str:
        json_str = json_str.split("```json")[1].split("```")[0]
    elif "```" in json_str:
        json_str = json_str.split("```")[1].split("```")[0]
    
    json_str = json_str.strip()
    
    try:
        data = json.loads(json_str)
    except json.JSONDecodeError as e:
        print(f"  JSON parse error: {e}")
        print(f"  Response snippet: {json_str[:200]}...")
        continue
    
    print(f"  Generated longDescription length: {len(data.get('longDescription', ''))} chars")
    
    # Build the TypeScript object
    icon_name = tool_info["existing"]["icon"]
    alt_list = json.dumps(data.get("alternatives", [])).replace("'", "'")
    features_list = json.dumps(data.get("features", []))
    pros_list = json.dumps(data.get("pros", []))
    cons_list = json.dumps(data.get("cons", []))
    
    long_desc = escape_dq(data.get("longDescription", ""))
    description = escape_dq(data.get("description", ""))
    pricing = escape_dq(data.get("pricing", ""))
    pricing_detail = escape_dq(data.get("pricingDetail", ""))
    use_case = escape_dq(data.get("useCase", ""))
    website_url = escape_dq(data.get("websiteUrl", ""))
    
    sb = data.get("scoreBreakdown", {})
    
    quotes = data.get("userQuotes", [])
    quotes_ts = "[" + ", ".join([
        json.dumps({"role": q.get("role", ""), "company": q.get("company", ""), "quote": q.get("quote", "")})
        for q in quotes
    ]) + "]"
    
    rating = data.get("rating", tool_info["existing"]["rating"])
    review_count = data.get("reviewCount", tool_info["existing"]["reviewCount"])
    
    new_entry = f"""  {{
    id: "{tool_id}",
    name: "{tool_name}",
    category: "{tool_info['category']}",
    rating: {rating},
    reviewCount: {review_count},
    icon: {icon_name},
    description: "{description}",
    longDescription: "{long_desc}",
    pros: {json.dumps(data.get("pros", []))},
    cons: {json.dumps(data.get("cons", []))},
    pricing: "{pricing}",
    pricingDetail: "{pricing_detail}",
    features: {json.dumps(data.get("features", []))},
    useCase: "{use_case}",
    websiteUrl: "{website_url}",
    alternatives: {json.dumps(data.get("alternatives", []))},
    scoreBreakdown: {{
      features: {sb.get("features", 9.0)},
      reviews: {sb.get("reviews", 9.0)},
      momentum: {sb.get("momentum", 9.0)},
      popularity: {sb.get("popularity", 9.0)}
    }},
    userQuotes: {quotes_ts},
  }}"""
    
    # Find and replace the tool entry in the file
    # We need to identify the exact block for this tool
    
    # Read current file
    with open('app/data/tools.ts', 'r') as f:
        current_content = f.read()
    
    if tool_id == "tableau":
        # Find Tableau's block (first tool, starts after "ALL_TOOLS: ToolData[] = [")
        start_marker = 'export const ALL_TOOLS: ToolData[] = ['
        start_idx = current_content.find(start_marker)
        if start_idx < 0:
            print("  ERROR: Could not find ALL_TOOLS start")
            continue
        
        # Find the start of the first tool entry after the opening bracket
        block_start = current_content.find('{\n    id: "tableau"', start_idx)
        if block_start < 0:
            print("  ERROR: Could not find tableau entry")
            continue
        
        # Find the end of this tool entry (find the closing }, followed by { or ])
        # Look for "  },\n  {" or "  },\n]" pattern
        search_from = block_start + 20
        # Match "  }," followed by newline and whitespace then either "{" or "]"
        match = re.search(r'  \},\n  (?:\{|$)', current_content[search_from:])
        if match:
            block_end = search_from + match.start() + 3  # +3 for "  }"
        else:
            # Fallback: find "  },\n  {" relatively
            block_end = current_content.find('  },\n  {', search_from)
            if block_end < 0:
                block_end = current_content.find('  },\n];', search_from)
                if block_end >= 0:
                    block_end += 2  # include "  }"
            if block_end >= 0:
                block_end += 2  # include "  }"
        
        if block_end < 0:
            print("  ERROR: Could not find tableau block end")
            continue
            
        old_entry = current_content[block_start:block_end]
        
        tools_content_updated = current_content.replace(old_entry, new_entry)
        
    elif tool_id == "powerbi":
        powerbi_start = current_content.find('{\n    id: "powerbi"')
        if powerbi_start < 0:
            print("  ERROR: Could not find powerbi entry")
            continue
        search_from = powerbi_start + 20
        match = re.search(r'  \},\n  (?:\{|$)', current_content[search_from:])
        if match:
            block_end = search_from + match.start() + 3
        else:
            block_end = current_content.find('  },\n  {', search_from)
            if block_end < 0:
                block_end = current_content.find('  },\n];', search_from)
            if block_end >= 0:
                block_end += 2
        if block_end < 0:
            print("  ERROR: Could not find powerbi block end")
            continue
        old_entry = current_content[powerbi_start:block_end]
        tools_content_updated = current_content.replace(old_entry, new_entry)
        
    elif tool_id == "looker":
        # Need to be careful - "looker" appears in multiple places
        # Find the first occurrence that has "id: \"looker\""
        looker_start = current_content.find('{\n    id: "looker"')
        if looker_start < 0:
            print("  ERROR: Could not find looker entry")
            continue
        search_from = looker_start + 20
        match = re.search(r'  \},\n  (?:\{|$)', current_content[search_from:])
        if match:
            block_end = search_from + match.start() + 3
        else:
            block_end = current_content.find('  },\n  {', search_from)
            if block_end < 0:
                block_end = current_content.find('  },\n];', search_from)
            if block_end >= 0:
                block_end += 2
        if block_end < 0:
            print("  ERROR: Could not find looker block end")
            continue
        old_entry = current_content[looker_start:block_end]
        tools_content_updated = current_content.replace(old_entry, new_entry)
    
    # Write updated content
    with open('app/data/tools.ts', 'w') as f:
        f.write(tools_content_updated)
    
    print(f"  ✅ {tool_name} refreshed successfully!")
    current_content = tools_content_updated

print("\n=== Tools refresh complete ===\n")

# === Generate Blog Post ===
print("=== Generating Blog Post ===\n")

blog_prompt = """Write a comprehensive, G2-style blog post in English about: "Top Data Analytics and Data Science Trends for 2026".

Requirements:
- Title: Catchy, SEO-optimized title
- Slug: URL-friendly, unique slug
- Excerpt: 100-150 word summary
- Content: 2500-5000 characters of pure English, G2-style (first/third person mixed, opinionated, data-driven)
- Structure: 
  - Introduction with stats/data
  - 5-7 main sections with subheadings
  - At least one comparison table
  - FAQ section (3-5 questions)
  - Conclusion with recommendations
- Do NOT wrap the content in triple backticks
- Write the content as plain text that can be embedded in a template literal
- The content should be directly usable in a JS template literal (backtick string)
- Avoid ${...} patterns inside the content that could be interpreted as JS template expressions
- NO Chinese characters, pure English only
- Focus on real 2026 trends: AI-native analytics, semantic layers, data contracts, observability, reverse ETL, embedded analytics, data mesh, real-time streaming, MLOps, data governance evolution

Return the result as a JSON object with these fields:
{
  "slug": "url-friendly-slug-here",
  "title": "The Article Title",
  "excerpt": "100-150 word summary...",
  "content": "The full article with markdown formatting...",
  "category": "Data Analytics",
  "readTime": 8,
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"]
}"""

blog_result = call_qwen(blog_prompt, "You are a senior G2-style content writer specializing in data analytics and data science.")

if not blog_result:
    print("ERROR: Blog post generation failed")
    sys.exit(1)

# Extract JSON
blog_json_str = blog_result
if "```json" in blog_json_str:
    blog_json_str = blog_json_str.split("```json")[1].split("```")[0]
elif "```" in blog_json_str:
    blog_json_str = blog_json_str.split("```")[1].split("```")[0]

blog_json_str = blog_json_str.strip()

try:
    blog_data = json.loads(blog_json_str)
except json.JSONDecodeError as e:
    print(f"Blog JSON parse error: {e}")
    # Try to fix common issues
    # Maybe it has escaped quotes issues
    blog_json_str = blog_json_str.replace('\\"', "'")
    try:
        blog_data = json.loads(blog_json_str)
        print("Fixed JSON by replacing escaped quotes")
    except:
        print(f"Response: {blog_result[:500]}")
        sys.exit(1)

slug = blog_data.get("slug", "data-analytics-trends-2026")
title = blog_data.get("title", "Top Data Analytics Trends 2026")
excerpt = blog_data.get("excerpt", "")
content = blog_data.get("content", "")
category = blog_data.get("category", "Data Analytics")
read_time = blog_data.get("readTime", 8)
tags = blog_data.get("tags", ["Data Analytics", "Data Science", "2026 Trends"])

print(f"Blog: {title}")
print(f"Slug: {slug}")
print(f"Content length: {len(content)} chars")

# Ensure content doesn't have ${} patterns that break JS template literals
content = content.replace("${", "\\${")

# Read blog-posts.ts
with open('app/data/blog-posts.ts', 'r') as f:
    blog_posts_content = f.read()

# Build new blog post entry
escaped_content = content.replace('`', '\\`').replace('${', '\\${')

new_blog_post = f"""  {{
    slug: "{slug}",
    title: "{title}",
    excerpt: "{excerpt}",
    content: `{escaped_content}`,
    author: "Tools Expert",
    authorRole: "Tools Navigation Hub",
    date: "2026-06-09",
    category: "{category}",
    readTime: {read_time},
    tags: {json.dumps(tags)}
  }}"""

# Find the CATEGORIES export and insert before it
# Or find the last blog post entry and add after it
categories_marker = "export const CATEGORIES"
categories_idx = blog_posts_content.find(categories_marker)

if categories_idx > 0:
    # Find the closing bracket/tag of the last array entry before CATEGORIES
    # Look backward from categories_idx
    pre_content = blog_posts_content[:categories_idx].rstrip()
    # Check if there's a trailing comma issue
    # Find last "  },\n" before CATEGORIES
    last_brace = pre_content.rfind("  },")
    if last_brace >= 0:
        # Check what's after the last entry
        after_last = pre_content[last_brace+4:].strip()
        if after_last.startswith("]"):
            # Array is closed, need to insert before the closing bracket
            # Remove the closing bracket, add comma + new entry + closing bracket
            blog_posts_content = blog_posts_content[:categories_idx]
            # Find the last "];" before CATEGORIES
            array_close = blog_posts_content.rfind("];")
            if array_close >= 0:
                blog_posts_content = blog_posts_content[:array_close].rstrip()
                # Add comma if needed
                if not blog_posts_content.endswith(","):
                    blog_posts_content += ","
                blog_posts_content += "\n" + new_blog_post + "\n];\n\n"
                blog_posts_content += categories_marker + blog_posts_content[len(categories_marker):]
                # Hmm this is getting complicated. Let me just use the original approach.
                pass
    
    # Simpler approach: find the end of the BLOG_POSTS array
    end_of_array = blog_posts_content.find("];\n\n" + categories_marker)
    if end_of_array < 0:
        end_of_array = blog_posts_content.find("];\n\n", 0)
    
    if end_of_array >= 0:
        # Find the last entry
        slice_before = blog_posts_content[:end_of_array].rstrip()
        # Check if last char is comma
        if slice_before.endswith(","):
            # Insert new entry after the comma
            pass
        
        # Remove the "];" 
        before_array_end = blog_posts_content[:end_of_array]
        after_array_end = blog_posts_content[end_of_array+2:]  # skip ];
        
        # Trim trailing whitespace and check for trailing comma
        trimmed = before_array_end.rstrip()
        if trimmed.endswith(","):
            trimmed = trimmed[:-1].rstrip()
        
        new_content = trimmed + ",\n" + new_blog_post + "\n];" + after_array_end
        
        with open('app/data/blog-posts.ts', 'w') as f:
            f.write(new_content)
        
        print("✅ Blog post added to blog-posts.ts")
    else:
        print("ERROR: Could not find array end marker")
        sys.exit(1)
else:
    print("ERROR: Could not find CATEGORIES marker")
    sys.exit(1)

# === Update sitemap BLOG_SLUGS ===
print("\n=== Updating sitemap BLOG_SLUGS ===")

with open('app/sitemap.xml/route.ts', 'r') as f:
    sitemap_content = f.read()

# Find BLOG_SLUGS array
blog_slugs_start = sitemap_content.find('const BLOG_SLUGS = [')
if blog_slugs_start < 0:
    print("ERROR: Could not find BLOG_SLUGS")
    sys.exit(1)

# Find the closing bracket
slugs_bracket_end = sitemap_content.find(']', blog_slugs_start)
if slugs_bracket_end < 0:
    print("ERROR: Could not find BLOG_SLUGS closing bracket")
    sys.exit(1)

# Get existing slugs
existing_slugs_section = sitemap_content[blog_slugs_start:slugs_bracket_end+1]
print(f"Current BLOG_SLUGS section: {existing_slugs_section[:100]}...")

# Check if slug already exists
if slug in sitemap_content:
    print(f"Slug '{slug}' already in BLOG_SLUGS, skipping")
else:
    # Find the last slug entry and add after it
    # Look for the last string entry before ]
    lines = sitemap_content[blog_slugs_start:slugs_bracket_end].split('\n')
    last_line = lines[-1].strip()
    
    # Add new slug before the closing bracket
    indent = "  "
    new_slugs_section = existing_slugs_section.rstrip()
    if new_slugs_section.endswith("]"):
        # Add a comma after the last line if not already there
        # Check if there's a trailing comma on the line before ]
        before_bracket = new_slugs_section[:-1].rstrip()
        if before_bracket.endswith(","):
            new_slugs_section = before_bracket + f"\n    \"{slug}\",\n" + "]"
        else:
            # Add comma to last entry and then new slug
            # Find the last quoted string
            last_quote_end = before_bracket.rfind('"')
            last_quote_start = before_bracket.rfind('"', 0, last_quote_end)
            if last_quote_start >= 0:
                new_slugs_section = before_bracket[:last_quote_end+1] + ',"\n    "' + slug + '"\n]'
            else:
                new_slugs_section = before_bracket.rstrip() + ',\n    "' + slug + '",\n]'
    
    sitemap_content = sitemap_content[:blog_slugs_start] + new_slugs_section + sitemap_content[slugs_bracket_end+1:]
    
    with open('app/sitemap.xml/route.ts', 'w') as f:
        f.write(sitemap_content)
    
    print(f"✅ Slug '{slug}' added to BLOG_SLUGS")

print("\n=== All updates complete! ===")
