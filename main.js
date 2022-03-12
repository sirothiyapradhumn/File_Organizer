// entry point of my command line
let helpFunc = require("./commands/help");

let inputArr = process.argv.slice(2);
let command = inputArr[0];
switch (command) {
    case "tree" : 
        console.log("tree function call");
        break;
    case "organize" :
        console.log("organize function call");
        break;
    case "help" :
        helpFunc.helpFunc();
        break;
    default:
        console.log("command not recognized :/");
        break;
}