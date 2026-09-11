const fs = require('fs');
const path = require('path');

const cssDir = path.join(__dirname, 'app', 'css');
const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));

cssFiles.forEach(file => {
  const filePath = path.join(cssDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace url(../images/ with url(/images/
  // Replace url(../nimg/ with url(/nimg/
  // Replace url("owl.video.play.html") with none
  let originalContent = content;
  content = content.replace(/url\(\.\.\/images\//g, 'url(/images/');
  content = content.replace(/url\(\.\.\/nimg\//g, 'url(/nimg/');
  content = content.replace(/url\(['"]?owl\.video\.play\.html['"]?\)/g, 'none');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated URLs in ${file}`);
  }
});
