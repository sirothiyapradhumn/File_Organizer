// entry point of my command line
let help = require("./commands/help");
let organizeFun = require("./commands/organize");
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];
switch (command) {
    case "tree" : 
        console.log("tree function call");
        break;
    case "organize" :
        organizeFun.organize(path);
        break;
    case "help" :
        help.helpFunc();
        break;
    default:
        console.log("command not recognized :/");
        break;
}