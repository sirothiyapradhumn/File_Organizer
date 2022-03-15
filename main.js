// entry point of my command line
let help = require("./commands/help");

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
        help.helpFunc();
        break;
    default:
        console.log("command not recognized :/");
        break;
}