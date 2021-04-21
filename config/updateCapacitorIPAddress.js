const fs = require("fs");
const fileName = "../capacitor.config.json";
const file = require(fileName);
const path = require("path");

function getIPAddress() {
  var interfaces = require("os").networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];

    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      )
        return alias.address;
    }
  }
  return "0.0.0.0";
}

if (file.server.url.includes("internal-ip-address")) {
  file.server.url = `http://${getIPAddress()}:3000`;
}

console.log({ file });

fs.writeFile(
  path.join(__dirname, "../capacitor.config.json"),
  JSON.stringify(file, null, 2),
  function writeJSON(err) {
    if (err) {
      return console.error(err);
    }
    console.log(`Done copying ip address to capacitor config`);
  }
);
