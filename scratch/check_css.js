const fs = require('fs');
const path = require('path');
const https = require('https');

const css = fs.readFileSync('talkspot-site/app/css/style.css', 'utf8');
const urls = [];
const regex = /url\(([^)]+)\)/g;
let m;
while (m = regex.exec(css)) {
  urls.push(m[1].replace(/['"]/g, '').trim());
}

const uniqueUrls = Array.from(new Set(urls));
console.log('Total unique URLs in CSS:', uniqueUrls.length);
console.log(uniqueUrls);

// Let's download these CSS images!
const BASE_URL = 'https://talkspot.in/';
const TARGET_DIR = 'C:\\Users\\aadij\\.gemini\\antigravity\\scratch\\talkspot-site\\public';

function download(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        download(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed ${url} code ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const urlPath of uniqueUrls) {
    if (urlPath.startsWith('data:')) continue;
    // Resolve relative path: '../images/...' should go to public/images/...
    let cleanPath = urlPath;
    if (urlPath.startsWith('../')) {
      cleanPath = urlPath.substring(3); // remove '../'
    } else if (urlPath.startsWith('css/')) {
      cleanPath = urlPath;
    }
    
    const url = BASE_URL + cleanPath;
    const dest = path.join(TARGET_DIR, cleanPath);
    try {
      console.log(`Downloading CSS image: ${url} -> ${dest}`);
      await download(url, dest);
    } catch (e) {
      console.error(`Failed: ${urlPath}`, e.message);
    }
  }
}

run().catch(console.error);
