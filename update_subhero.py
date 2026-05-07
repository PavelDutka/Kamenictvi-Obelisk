import os
import re

files = ["desky.html", "dlazby.html", "doplnky.html", "pomniky.html", "stavby.html"]

for f in files:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # We need to replace style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('...');"
        # with style="--bg-image: url('...');"
        
        new_content = re.sub(
            r'style="background-image:\s*linear-gradient\([^)]+\),\s*([^,)]+\),\s*[^,)]+\)),\s*url\(\'([^\']+)\'\);"|style="background-image:\s*linear-gradient\([^)]+\),\s*url\(\'([^\']+)\'\);"',
            lambda m: f'style="--bg-image: url(\'{m.group(2) or m.group(3)}\');"',
            content
        )

        # Also handle background: linear-gradient(...), url('...'); 
        new_content = re.sub(
            r'style="background:\s*linear-gradient\([^)]+\),\s*url\(\'([^\']+)\'\);"',
            lambda m: f'style="--bg-image: url(\'{m.group(1)}\');"',
            new_content
        )
        
        # Sometimes there's rgba(0,0,0,0.5), rgba(0,0,0,0.5) inside linear-gradient
        new_content = re.sub(
            r'style="background-image:\s*linear-gradient\(rgba\([^)]+\),\s*rgba\([^)]+\)\),\s*url\(\'([^\']+)\'\);"',
            lambda m: f'style="--bg-image: url(\'{m.group(1)}\');"',
            new_content
        )
        
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Updated {f}")
