const fs = require('fs');
const path = require('path');
const os = require('os');
const file = require('../capacitor.config.json');

function getIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];

    for (let i = 0; i < iface.length; i += 1) {
      const alias = iface[i];
      if (
        alias.family === 'IPv4' &&
        alias.address !== '127.0.0.1' &&
        !alias.internal
      )
        return alias.address; 
    }
  }
  return '0.0.0.0';
}

if (file.server.url.includes('internal-ip-address')) {
  file.server.url = `http://${getIPAddress()}:3000`;
}

fs.writeFile(
  path.join(__dirname, '../capacitor.config.json'),
  JSON.stringify(file, null, 2),
  function writeJSON(err) {
    if (err) {
      console.error(err);
      return false;
    }
    console.log(`Done copying ip address to capacitor config`);
    return true;
  }
);
