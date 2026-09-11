const fs = require('fs');
const https = require('https');
const path = require('path');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    // Make sure directory exists
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        download(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (Status Code: ${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // Delete the file async
      reject(err);
    });
  });
}

const fonts = [
  'fonts/Flaticon.woff2',
  'fonts/Flaticon.woff',
  'fonts/Flaticon.ttf',
  'fonts/Flaticon.svg',
  'fonts/fontawesome-webfont.woff2?v=4.7.0',
  'fonts/fontawesome-webfont.woff?v=4.7.0',
  'fonts/fontawesome-webfont.ttf?v=4.7.0',
  'fonts/fontawesome-webfont.eot?v=4.7.0'
];

const images = [
  'nimg/echostar-logo.png?v=4',
  'nimg/echostar-icon.png?v=4',
  'nimg/banner3.jpeg',
  'nimg/banner%207.avif',
  'nimg/Speech-Pathology.jpg',
  'nimg/lac.jpg',
  'nimg/Aba%20therapy.jpg',
  'nimg/occupational-therapy.jpg',
  'nimg/ab2.jpg',
  'nimg/banner2.jpg',
  'nimg/speech.jpg',
  'nimg/language.jpeg',
  'nimg/oral.jpg',
  'nimg/speech%20clarity.webp',
  'nimg/sluttering.jpeg',
  'nimg/special.jpg',
  'nimg/Occupational.webp',
  'nimg/ab1.jpg',
  'nimg/1.png',
  'nimg/2.png',
  'nimg/3.png',
  'nimg/4.png',
  'nimg/5.png',
  'nimg/6.png',
  'nimg/7.png',
  'nimg/8.png',
  'nimg/9.png',
  'nimg/man.jpeg',
  'nimg/test.jpg'
];

const BASE_URL = 'https://talkspot.in/';
const TARGET_DIR = 'C:\\Users\\aadij\\.gemini\\antigravity\\scratch\\talkspot-site';

async function run() {
  console.log('Downloading fonts...');
  for (const font of fonts) {
    // Clean up query param for filename
    const cleanFontPath = font.split('?')[0];
    const url = BASE_URL + font;
    const dest = path.join(TARGET_DIR, 'app', cleanFontPath);
    try {
      console.log(`Downloading ${url} -> ${dest}`);
      await download(url, dest);
    } catch (e) {
      console.error(`Error downloading font ${font}:`, e.message);
    }
  }

  console.log('Downloading images...');
  for (const img of images) {
    const url = BASE_URL + img;
    // Decode percent encoding for filename
    const cleanImgPath = decodeURIComponent(img);
    const dest = path.join(TARGET_DIR, 'public', cleanImgPath);
    try {
      console.log(`Downloading ${url} -> ${dest}`);
      await download(url, dest);
    } catch (e) {
      console.error(`Error downloading image ${img}:`, e.message);
    }
  }
  console.log('Done!');
}

run().catch(console.error);
