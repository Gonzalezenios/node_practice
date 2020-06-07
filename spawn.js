const cp = require("child_process");

const questionApp = cp.spawn("node", ["question.js"]);

questionApp.stdin.write("Enio \n");
questionApp.stdin.write("Buenos Aires \n");
questionApp.stdin.write("Change the world \n");

questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
    console.log(`questionApp process exited`);
});

