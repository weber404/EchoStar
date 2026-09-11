import os
import re
import urllib.parse
import urllib.request
import urllib.error

BASE_URL = "https://www.talkspot.in/"
TARGET_DIR = r"c:\Users\aadij\OneDrive\Desktop\scratch"

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': '*/*',
}

PAGES = [
    "index.html",
    "about.html",
    "gallery.html",
    "contact.html",
    "abatherapy.html",
    "language.html",
    "occupation.html",
    "oralfeeding.html",
    "specialedu.html",
    "speech.html",
    "stutering.html",
]

downloaded_urls = set()

def fetch_url(url):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            return response.read()
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def save_file(rel_path, data):
    rel_path = rel_path.lstrip("/").replace("\\", "/")
    rel_path = rel_path.split("?")[0].split("#")[0]
    if not rel_path:
        return
    full_path = os.path.join(TARGET_DIR, rel_path.replace("/", os.sep))
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, "wb") as f:
        f.write(data)
    print(f"Saved: {rel_path} ({len(data)} bytes)")

def download_asset(asset_url):
    clean_url = asset_url.split("?")[0].split("#")[0]
    if clean_url in downloaded_urls:
        return
    downloaded_urls.add(clean_url)
    
    parsed = urllib.parse.urlparse(clean_url)
    if parsed.netloc and parsed.netloc not in ("www.talkspot.in", "talkspot.in"):
        return
    
    rel_path = parsed.path.lstrip("/")
    if not rel_path:
        return
        
    full_url = urllib.parse.urljoin(BASE_URL, rel_path)
    data = fetch_url(full_url)
    if data:
        save_file(rel_path, data)
        if rel_path.endswith(".css"):
            parse_css_for_urls(rel_path, data.decode('utf-8', errors='ignore'))

def parse_css_for_urls(css_rel_path, css_text):
    css_dir = os.path.dirname(css_rel_path)
    urls = re.findall(r'url\s*\(\s*[\'"]?([^\'")]+)[\'"]?\s*\)', css_text, re.IGNORECASE)
    for u in urls:
        u = u.strip()
        if u.startswith("data:") or u.startswith("http://") or u.startswith("https://"):
            if "talkspot.in" in u:
                download_asset(u)
            continue
        combined = urllib.parse.urljoin(f"http://dummy.com/{css_dir}/", u).replace("http://dummy.com/", "")
        download_asset(combined)

def main():
    print("Starting talkspot.in full site clone...")
    
    html_contents = {}
    for page in PAGES:
        url = urllib.parse.urljoin(BASE_URL, page)
        print(f"Fetching page: {url}")
        data = fetch_url(url)
        if data:
            save_file(page, data)
            html_contents[page] = data.decode('utf-8', errors='ignore')
    
    asset_patterns = [
        r'(?:src|href)=[\'"]([^\'"]+)[\'"]',
        r'url\s*\(\s*[\'"]?([^\'")]+)[\'"]?\s*\)',
        r'data-src=[\'"]([^\'"]+)[\'"]',
        r'data-bg=[\'"]([^\'"]+)[\'"]',
        r'data-background=[\'"]([^\'"]+)[\'"]',
    ]
    
    for page, content in html_contents.items():
        for pat in asset_patterns:
            matches = re.findall(pat, content, re.IGNORECASE)
            for m in matches:
                m = m.strip()
                if not m or m.startswith("#") or m.startswith("tel:") or m.startswith("mailto:") or m.startswith("javascript:"):
                    continue
                if m.startswith("http://") or m.startswith("https://"):
                    if "talkspot.in" in m:
                        download_asset(m)
                else:
                    if not m.endswith(".html") and not m.endswith(".php"):
                        download_asset(m)

    explicit_assets = [
        "js/jquery.js",
        "js/popper.min.js",
        "js/bootstrap.min.js",
        "js/TweenMax.min.js",
        "js/wow.js",
        "js/owl.js",
        "js/appear.js",
        "js/swiper.min.js",
        "js/jquery.fancybox.js",
        "js/menu-nav-btn.js",
        "js/jquery-ui.js",
        "js/bootstrap-select.min.js",
        "js/jquery.countdown.min.js",
        "js/knob.js",
        "js/isotope.js",
        "js/script.js",
        "js/respond.js",
        "js/validate.js",
        "css/bootstrap.css",
        "css/jquery-ui.css",
        "css/bootstrap-select.min.css",
        "css/swiper.min.css",
        "css/flaticon.css",
        "css/font-awesome.css",
        "css/animate.css",
        "css/custom-animate.css",
        "css/jquery.fancybox.min.css",
        "css/owl.css",
        "css/style.css",
        "css/responsive.css",
        "fonts/flaticon.ttf",
        "fonts/flaticon.woff",
        "fonts/flaticon.woff2",
        "fonts/flaticon.eot",
        "fonts/flaticon.svg",
        "fonts/fontawesome-webfont.woff2",
        "fonts/fontawesome-webfont.woff",
        "fonts/fontawesome-webfont.ttf",
        "fonts/fontawesome-webfont.eot",
        "fonts/fontawesome-webfont.svg",
        "nimg/logo5.png",
        "nimg/logo3.png",
        "images/favicon.png",
        "images/logo.png",
        "images/logo-2.png",
        "images/logo-light.png",
        "images/logo-dark.png",
        "images/footer-logo.png",
    ]
    for ea in explicit_assets:
        download_asset(ea)

    print(f"\nDone! Downloaded {len(downloaded_urls)} assets.")

if __name__ == "__main__":
    main()
