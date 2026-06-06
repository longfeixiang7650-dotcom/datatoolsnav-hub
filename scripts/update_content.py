#!/usr/bin/env python3
"""Update tools.ts with refined content for n8n, workato, relay-app and add blog post"""
import json
import re
import os

# Load generated content
with open('/tmp/generated_content.json', 'r') as f:
    data = json.load(f)

refined = data['tools']
blog_post_content = data['blog_post']

# Read current tools.ts
tools_path = '/home/edi/nocode-tool-hub/app/data/tools.ts'
with open(tools_path, 'r') as f:
    tools_content = f.read()

# Update longDescriptions for each tool
for tool_id, new_long_desc in refined.items():
    print(f"\nUpdating {tool_id}...")
    
    # Escape the value for safe insertion in double quotes
    escaped_value = new_long_desc.replace('\\', '\\\\').replace('"', '\\"')
    
    # Find the tool entry
    tool_start_pattern = 'id: "' + tool_id + '"'
    match = re.search(tool_start_pattern, tools_content)
    if not match:
        print(f"  Could not find tool {tool_id}")
        continue
    
    # Find the opening brace
    start_idx = match.start()
    brace_pos = tools_content.rfind('{', 0, start_idx)
    if brace_pos < 0:
        print(f"  Could not find opening brace for {tool_id}")
        continue
    
    # Find the matching closing brace
    depth = 1
    end_idx = brace_pos + 1
    while depth > 0 and end_idx < len(tools_content):
        if tools_content[end_idx] == '{':
            depth += 1
        elif tools_content[end_idx] == '}':
            depth -= 1
        end_idx += 1
    
    tool_entry = tools_content[brace_pos:end_idx]
    
    # Try double-quoted longDescription
    ld_pat = re.compile(r'(longDescription:\s*)"([^"]*)"')
    ld_match = ld_pat.search(tool_entry)
    
    if not ld_match:
        # Try backtick-quoted
        ld_pat2 = re.compile(r'(longDescription:\s*)`([^`]*)`')
        ld_match = ld_pat2.search(tool_entry)
    
    if ld_match:
        new_field = 'longDescription: "' + escaped_value + '"'
        before = tools_content[:brace_pos]
        after = tools_content[end_idx:]
        new_entry = tool_entry[:ld_match.start()] + new_field + tool_entry[ld_match.end():]
        tools_content = before + new_entry + after
        print(f"  OK Updated {tool_id} ({len(escaped_value)} chars)")
    else:
        print(f"  Could not find longDescription field for {tool_id}")

# Write updated tools.ts
with open(tools_path, 'w') as f:
    f.write(tools_content)
print("\nOK tools.ts written")

# --- Update blog-posts.ts ---
blogs_path = '/home/edi/nocode-tool-hub/app/data/blog-posts.ts'
with open(blogs_path, 'r') as f:
    blogs_content = f.read()

new_slug = "ai-powered-no-code-automation-2026-intelligent-workflows"

# Escape the blog content for backtick template literal
escaped_blog = blog_post_content.replace('\\', '\\\\')
escaped_blog = escaped_blog.replace('`', '\\`')
escaped_blog = escaped_blog.replace('${', '\\${')

# Build the new blog entry
new_entry_lines = []
new_entry_lines.append('  {')
new_entry_lines.append('    slug: "' + new_slug + '",')
new_entry_lines.append('    title: "The Rise of AI-Powered No-Code Automation in 2026: How Intelligent Workflows Are Reshaping Business Operations",')
new_entry_lines.append('    excerpt: "AI-augmented no-code automation is transforming business operations in 2026. Explore how n8n, Zapier, Make, and Relay.app embed intelligent workflows, with real benchmarks, platform comparisons, and actionable strategies for non-technical teams and enterprise adopters.",')
new_entry_lines.append('    content: `' + escaped_blog + '`,')
new_entry_lines.append('    author: "Alex Chen",')
new_entry_lines.append('    authorRole: "NoCode Expert",')
new_entry_lines.append('    date: "2026-06-06",')
new_entry_lines.append('    category: "Automation & Workflow",')
new_entry_lines.append('    readTime: 9,')
new_entry_lines.append('    tags: ["No-Code", "Automation", "AI", "n8n", "Zapier", "Make", "Relay.app", "Workato", "Intelligent Workflows", "2026"],')
new_entry_lines.append('  },')

new_entry = '\n'.join(new_entry_lines) + '\n];'

# Find the closing ]; of the array
insert_pos = blogs_content.rfind('\n];')
if insert_pos > 0:
    # Get the part before ];
    before = blogs_content[:insert_pos]
    before_end = before.rstrip()
    
    if before_end.endswith(','):
        # Already has comma, just append after the comma
        pass
    elif before_end.endswith('}'):
        # Find last brace position
        last_brace = before_end.rfind('}')
        before = before_end[:last_brace+1] + ',' + before_end[last_brace+1:]
    
    blogs_content = before + '\n' + new_entry
else:
    # Try without newline
    insert_pos = blogs_content.rfind('];')
    if insert_pos > 0:
        before = blogs_content[:insert_pos]
        before_end = before.rstrip()
        if before_end.endswith(','):
            pass
        elif before_end.endswith('}'):
            last_brace = before_end.rfind('}')
            before = before_end[:last_brace+1] + ',' + before_end[last_brace+1:]
        blogs_content = before + '\n' + new_entry

with open(blogs_path, 'w') as f:
    f.write(blogs_content)
print("OK Blog post '" + new_slug + "' added to blog-posts.ts")

# --- Update sitemap BLOG_SLUGS ---
print("\nLooking for sitemap files...")
found = False
sitemap_base = '/home/edi/nocode-tool-hub/app'
for root, dirs, files in os.walk(sitemap_base):
    for f in files:
        if 'sitemap' in f.lower():
            path = os.path.join(root, f)
            print("  Found: " + path)
            with open(path, 'r') as sf:
                sitemap_content = sf.read()
            
            if 'BLOG_SLUGS' in sitemap_content:
                # Find the blog slugs array
                blog_slugs_start = sitemap_content.find('BLOG_SLUGS')
                if blog_slugs_start >= 0:
                    # Find opening bracket after BLOG_SLUGS
                    bracket_open = sitemap_content.find('[', blog_slugs_start)
                    if bracket_open >= 0:
                        # Find closing bracket
                        bracket_close = sitemap_content.find('];', bracket_open)
                        if bracket_close >= 0:
                            # Check if slug already exists
                            slug_in_arr = '"' + new_slug + '"' in sitemap_content[bracket_open:bracket_close]
                            if slug_in_arr:
                                print("  Slug already in BLOG_SLUGS, skipping")
                            else:
                                # Find the last slug entry line
                                arr_content = sitemap_content[bracket_open:bracket_close+2]
                                # Find last comma before ]
                                last_comma = arr_content.rfind(',', 0, arr_content.rfind('];'))
                                if last_comma >= 0:
                                    insert_at = bracket_open + last_comma + 1
                                    sitemap_content = sitemap_content[:insert_at] + '\n    "' + new_slug + '",' + sitemap_content[insert_at:]
                                else:
                                    # No commas yet, add after bracket
                                    insert_at = bracket_open + 1
                                    sitemap_content = sitemap_content[:insert_at] + '\n    "' + new_slug + '",' + sitemap_content[insert_at:]
                                
                                with open(path, 'w') as sf:
                                    sf.write(sitemap_content)
                                print("  OK Added '" + new_slug + "' to BLOG_SLUGS in " + path)
                                found = True
                break  # Only update first matching file
    
    if found:
        break

if not found:
    print("  No sitemap file with BLOG_SLUGS was updated. This is fine if sitemap is generated dynamically.")

print("\nOK All updates complete")
