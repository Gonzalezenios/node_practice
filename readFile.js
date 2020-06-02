const fs = require("fs");

fs.readFileSync("./lib/readme.md", "UTF-8", (err, text) => {
    console.log("file contents read");
    console.log(text);
});