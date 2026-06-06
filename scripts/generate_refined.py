#!/usr/bin/env python3
"""Generate refined tool content and a new blog post using Qwen API"""
import os
import re
import json
import subprocess

# Read API keys
with open('/home/edi/.hermes/api_keys.env', 'r') as f:
    content = f.read()
for line in content.split('\n'):
    line = line.strip()
    if line and not line.startswith('#'):
        parts = line.split('=', 1)
        if len(parts) == 2:
            os.environ[parts[0].strip()] = parts[1].strip()

QWEN_API_KEY = os.environ.get('QWEN_API_KEY_1', '')
QWEN_BASE_URL = os.environ.get('QWEN_BASE_URL', 'https://dashscope.aliyuncs.com/compatible-mode/v1')

if not QWEN_API_KEY:
    print("ERROR: No QWEN_API_KEY found")
    exit(1)

def call_qwen(prompt, system="You are a professional content writer for a no-code tools website. Write in natural English. Be detailed, specific, and factual."):
    """Call Qwen API"""
    import urllib.request
    data = json.dumps({
        "model": "qwen-plus",
        "messages": [
            {"role": "system", "content": system},
            {"role": "user", "content": prompt}
        ],
        "max_tokens": 4096,
        "temperature": 0.7,
    }).encode()
    req = urllib.request.Request(
        f"{QWEN_BASE_URL}/chat/completions",
        data=data,
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {QWEN_API_KEY}"
        }
    )
    try:
        resp = urllib.request.urlopen(req, timeout=120)
        result = json.loads(resp.read())
        return result['choices'][0]['message']['content']
    except Exception as e:
        print(f"API call error: {e}")
        return None

def generate_refined_tool(tool_id, tool_name, category, current_description, current_long_desc):
    """Generate refined content for a single tool"""
    # Generate the long description
    prompt = f"""I need you to write a DETAILED, long-form description (at least 800 characters, aim for 1000-1500 chars) for the no-code tool "{tool_name}" in the "{category}" category.

Current short description: "{current_description}"
Current long description: "{current_long_desc}"

Write a comprehensive long description that:
1. Opens with what the tool is and its market position
2. Covers key features and capabilities in detail
3. Mentions use cases and who it's best for
4. Discusses strengths and honest limitations
5. Sounds like a knowledgeable industry analyst

Format: Return ONLY the description text, no markdown headers, no bullet lists, no quotes around it. Single paragraph of flowing, professional text. 1000-1500 characters."""

    result = call_qwen(prompt)
    if not result:
        return None
    
    # Clean up the result - remove any surrounding quotes
    result = result.strip()
    if result.startswith('"') and result.endswith('"'):
        result = result[1:-1]
    if result.startswith("'") and result.endswith("'"):
        result = result[1:-1]
    
    return result.strip()

def generate_blog_post():
    """Generate a new blog post about no-code tools"""
    prompt = """Write a comprehensive, professional blog post about "The Rise of AI-Powered No-Code Automation in 2026: How Intelligent Workflows Are Reshaping Business Operations".

The post should be 2500-5000 characters. Include:
1. An engaging introduction about how AI is transforming no-code automation
2. Specific examples of AI features in tools like n8n, Zapier, Make, Relay.app, Workato
3. A comparison table of AI-powered automation features
4. Practical use cases with real-world scenarios
5. Future predictions for H2 2026 and 2027
6. FAQ section addressing common questions
7. A conclusion with actionable recommendations

Write in a professional but accessible tone. Include specific tool names, features, and realistic data points. 

Return ONLY the content body - no title, no slug, no metadata. Use markdown formatting with ## headers."""
    
    result = call_qwen(prompt)
    return result


# Main execution
print("=== Generating refined tool content ===")

# Define tools to refine
tools_to_refine = [
    {
        "id": "n8n",
        "name": "n8n",
        "category": "Automation & Workflow",
        "description": "Open-source workflow automation with self-hosting.",
        "longDescription": "n8n stands as a powerful, developer-first open-source workflow automation platform that bridges the gap between enterprise-grade control and low-code accessibility."
    },
    {
        "id": "workato",
        "name": "Workato",
        "category": "Automation & Workflow",
        "description": "Enterprise iPaaS for integration and automation.",
        "longDescription": "Workato is an enterprise integration platform as a service (iPaaS) that connects apps, data, and experiences across the entire organization."
    },
    {
        "id": "relay-app",
        "name": "Relay.app",
        "category": "Automation & Workflow",
        "description": "Modern automation platform with AI-native features.",
        "longDescription": "Relay.app is a modern workflow automation platform designed for teams, with AI-native features, approval workflows, and collaborative debugging."
    }
]

results = {}
for tool in tools_to_refine:
    print(f"Generating content for {tool['name']}...")
    refined = generate_refined_tool(
        tool['id'], tool['name'], tool['category'],
        tool['description'], tool['longDescription']
    )
    if refined:
        results[tool['id']] = refined
        print(f"  ✓ Generated ({len(refined)} chars)")
    else:
        print(f"  ✗ Failed to generate for {tool['name']}")
        # Use fallback content
        results[tool['id']] = tool['longDescription']

print("\n=== Generating blog post ===")
blog_content = generate_blog_post()
if blog_content:
    print(f"  ✓ Blog post generated ({len(blog_content)} chars)")
else:
    print("  ✗ Failed to generate blog post, using fallback")
    blog_content = "AI-Powered No-Code Automation in 2026 is transforming how businesses operate..."

# Save results for the next script
output = {
    "tools": results,
    "blog_post": blog_content
}
with open('/tmp/generated_content.json', 'w') as f:
    json.dump(output, f, ensure_ascii=False, indent=2)

print("\n✓ Content saved to /tmp/generated_content.json")
