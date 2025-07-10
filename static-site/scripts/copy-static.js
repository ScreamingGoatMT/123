// scripts/copy-static.js
const fs = require('fs-extra');

async function copy() {
  // 1) Remove any old out/
  await fs.remove('out');

  // 2) Copy your Pinegrow export (static-site/) into out/
  await fs.copy('static-site', 'out');

  console.log('✅ out/ rebuilt from static-site/');
}

copy().catch(err => {
  console.error(err);
  process.exit(1);
});
