const fs = require("fs");

console.log("type something...");

process.stdin.on("data", data => {
    console.log(`I read ${data.length -1} character of text`);
});
