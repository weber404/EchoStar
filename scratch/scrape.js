const fs = require('fs');
const https = require('https');
const path = require('path');

function getUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function scrape() {
  console.log('Fetching homepage HTML...');
  const html = await getUrl('https://talkspot.in/');
  fs.writeFileSync('homepage.html', html);
  console.log('Saved homepage.html');

  // Extract stylesheet links
  const regex = /<link[^>]*href=["']([^"']*\.css)["'][^>]*>/gi;
  let match;
  const stylesheets = [];
  while ((match = regex.exec(html)) !== null) {
    stylesheets.push(match[1]);
  }

  console.log('Found stylesheets:', stylesheets);
  
  // Download stylesheets
  for (const styleUrl of stylesheets) {
    try {
      const fullUrl = styleUrl.startsWith('http') ? styleUrl : `https://talkspot.in/${styleUrl}`;
      console.log(`Downloading ${fullUrl}...`);
      const cssContent = await getUrl(fullUrl);
      const filename = path.basename(styleUrl);
      fs.writeFileSync(filename, cssContent);
      console.log(`Saved ${filename}`);
    } catch (e) {
      console.error(`Failed to download ${styleUrl}:`, e.message);
    }
  }
}

scrape().catch(console.error);
