import os
import re
import urllib.parse
import urllib.request

BASE_URL = "https://www.talkspot.in/"
ROOT_DIR = r"c:\Users\aadij\OneDrive\Desktop\scratch"

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
}

def check_and_download_missing():
    missing_assets = set()
    
    # 1. Check all HTML files
    for root, dirs, files in os.walk(ROOT_DIR):
        if "scratch" in root or ".git" in root or "node_modules" in root:
            continue
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                
                # Check src, href, data-src, background
                matches = re.findall(r'(?:src|href|data-src|data-bg|data-background)=[\'"]([^\'"#?]+)[\'"]', content, re.IGNORECASE)
                for m in matches:
                    m = m.strip()
                    if not m or m.startswith("http") or m.startswith("mailto:") or m.startswith("tel:") or m.startswith("javascript:"):
                        continue
                    if m.endswith(".html") or m.endswith(".php"):
                        continue
                    # Check if exists
                    local_path = os.path.normpath(os.path.join(ROOT_DIR, m))
                    if not os.path.exists(local_path):
                        missing_assets.add(m)
                        
                # Check inline url()
                css_urls = re.findall(r'url\s*\(\s*[\'"]?([^\'"#?)]+)[\'"]?\s*\)', content, re.IGNORECASE)
                for u in css_urls:
                    u = u.strip()
                    if not u or u.startswith("http") or u.startswith("data:"):
                        continue
                    local_path = os.path.normpath(os.path.join(ROOT_DIR, u))
                    if not os.path.exists(local_path):
                        missing_assets.add(u)

    # 2. Check CSS files
    css_dir = os.path.join(ROOT_DIR, "css")
    if os.path.exists(css_dir):
        for file in os.listdir(css_dir):
            if file.endswith(".css"):
                filepath = os.path.join(css_dir, file)
                with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                urls = re.findall(r'url\s*\(\s*[\'"]?([^\'"#?)]+)[\'"]?\s*\)', content, re.IGNORECASE)
                for u in urls:
                    u = u.strip()
                    if not u or u.startswith("http") or u.startswith("data:"):
                        continue
                    # CSS relative path
                    local_path = os.path.normpath(os.path.join(css_dir, u))
                    if not os.path.exists(local_path):
                        rel_from_root = os.path.relpath(local_path, ROOT_DIR).replace("\\", "/")
                        missing_assets.add(rel_from_root)

    print(f"Total missing assets found: {len(missing_assets)}")
    for m in sorted(missing_assets):
        print(f"Missing: {m}")
        # Try downloading
        url = urllib.parse.urljoin(BASE_URL, m.replace("\\", "/"))
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = resp.read()
                dest = os.path.normpath(os.path.join(ROOT_DIR, m))
                os.makedirs(os.path.dirname(dest), exist_ok=True)
                with open(dest, "wb") as f:
                    f.write(data)
                print(f" -> Downloaded successfully: {dest}")
        except Exception as e:
            print(f" -> Failed to download {url}: {e}")

if __name__ == "__main__":
    check_and_download_missing()
