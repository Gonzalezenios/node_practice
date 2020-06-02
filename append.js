const fs = require("fs");

const colorData = require("./lib/color.json");

colorData.colorList.forEach( c => {
    fs.appendFile("./storage.files/colors.md", `${c.color}: ${c.hex} \n`, err => {
        if (err) {
            throw err;
        }
    });
});