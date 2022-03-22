// entry point of my command line
let help = require("./commands/help");
let organizeFun = require("./commands/organize");
let treeFunc = require("./commands/tree");

let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];
switch (command) {
    case "tree" : 
        treeFunc.tree(path);
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