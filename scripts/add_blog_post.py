#!/usr/bin/env python3
"""
Add blog post and update sitemap properly.
"""

import json
import os
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

def call_qwen(prompt, system_prompt="You are a data analytics expert writing G2-style blog posts."):
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

# === Generate Blog Post ===
print("=== Generating Blog Post ===")

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
- Write the content as plain text without any code block markers
- NO Chinese characters, pure English only
- Focus on real 2026 trends: AI-native analytics, semantic layers, data contracts, observability, reverse ETL, embedded analytics, data mesh, real-time streaming, MLOps, data governance evolution

Return the result as a JSON object with these exact fields:
{
  "slug": "url-friendly-slug-here",
  "title": "The Article Title",
  "excerpt": "100-150 word summary...",
  "content": "The full article with markdown formatting...",
  "category": "Data Analytics",
  "readTime": 8,
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"]
}"""

blog_result = call_qwen(blog_prompt)

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
content = content.replace("${", "DOLLAR_BRACE_ESCAPED")

# === Read blog-posts.ts ===
with open('app/data/blog-posts.ts', 'r') as f:
    content_data = f.read()

# Build new blog post entry string
escaped_content = content.replace('`', '\\`')

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

# Find the last entry in BLOG_POSTS array and add after it
# Look for "];\n" that closes the BLOG_POSTS array (before "export const CATEGORIES")
end_marker = "];\n\nexport const CATEGORIES"
end_idx = content_data.find(end_marker)

if end_idx < 0:
    # Try alternative pattern
    end_marker = "];\n\nexport const "
    end_idx = content_data.find(end_marker)

if end_idx < 0:
    print("ERROR: Could not find end of BLOG_POSTS array")
    sys.exit(1)

# Insert the new entry before the closing "];"
pre = content_data[:end_idx].rstrip()
# If it ends with comma, good. If not, add one.
if pre.endswith(","):
    pre = pre.rstrip(",")
pre = pre.rstrip()

new_content = pre + ",\n" + new_blog_post + "\n" + content_data[end_idx:]

with open('app/data/blog-posts.ts', 'w') as f:
    f.write(new_content)

# Restore ${} escapes (they should be fine now)
with open('app/data/blog-posts.ts', 'r') as f:
    fixed_content = f.read()
fixed_content = fixed_content.replace("DOLLAR_BRACE_ESCAPED", "${")
with open('app/data/blog-posts.ts', 'w') as f:
    f.write(fixed_content)

print("✅ Blog post added to blog-posts.ts")

# === Update sitemap BLOG_SLUGS ===
print("\n=== Updating sitemap BLOG_SLUGS ===")

with open('app/sitemap.xml/route.ts', 'r') as f:
    sitemap_content = f.read()

# Check if slug already exists
if slug in sitemap_content:
    print(f"Slug '{slug}' already in BLOG_SLUGS, skipping")
else:
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
    
    # Get the content before the closing bracket
    before_bracket = sitemap_content[blog_slugs_start:slugs_bracket_end].rstrip()
    
    # Clean up the existing content - fix the messy line
    # The original has: "data-engineering-pipeline-2026-etl-eltd-reverse-etl-tools-comparison",    "data-visualization-tools-guide",
    # Which is 2 slugs on one line. Normalize by splitting.
    
    # Find all slugs in the array
    import re
    existing_slugs = re.findall(r'"([^"]+)"', before_bracket)
    existing_slugs = [s for s in existing_slugs if s.strip()]
    
    if slug in existing_slugs:
        print(f"Slug '{slug}' already exists, skipping")
    else:
        existing_slugs.append(slug)
        
        # Rebuild BLOG_SLUGS
        slugs_lines = "const BLOG_SLUGS = [\n"
        for s in existing_slugs:
            slugs_lines += f'    "{s}",\n'
        slugs_lines += "] as const;"
        
        # Find where this section ends (look for "as const;" after the bracket)
        as_const_end = sitemap_content.find("as const;", blog_slugs_start)
        if as_const_end >= 0:
            end_of_section = as_const_end + len("as const;")
        else:
            end_of_section = slugs_bracket_end + 1
        
        new_sitemap = sitemap_content[:blog_slugs_start] + slugs_lines + sitemap_content[end_of_section:]
        
        with open('app/sitemap.xml/route.ts', 'w') as f:
            f.write(new_sitemap)
        
        print(f"✅ Slug '{slug}' added to BLOG_SLUGS")

print("\n=== Done! ===")
