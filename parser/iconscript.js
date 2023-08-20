const fs = require("fs");
const path = require("path")

var files = fs.readdirSync("../public/servericons/");
let icons = [];
files.forEach((file) => {
  icons.push(file);
});

fs.writeFile(path.dirname(__filename) + "/output/icons.json", JSON.stringify(icons), (err) => {
  if (err) console.log(err);
  else {
    console.log("File written successfully\n");
  }
});
