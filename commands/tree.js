const fs = require("fs");

const path = require("path");

function treeFn(dirPath) {
  if (dirPath == undefined) {
    console.log("Please Enter a Valid Path");
    return;
  }
  let doesExist = fs.existsSync(dirPath);
  if (doesExist == true) {
    treeHelper(dirPath, " ");
  }
}

function treeHelper(targetPath, indent) {
    let isFile = fs.lstatSync(targetPath).isFile();

    if (isFile == true) {
        let fileName = path.basename(targetPath);
        console.log(indent + "├── " + fileName);
        return;
    }
    let dirName = path.basename(targetPath);
    console.log(indent + "└──" + dirName);

    let children = fs.readdirSync(targetPath);

    for (let i = 0; i < children.length; i++) {
      let childpath = path.join(targetPath, children[i]);
      treeHelper(childpath, indent + "\t");
    }
}

module.exports = {
  tree: treeFn,
};

// let srcPath="/Users/abhishekgoel/Desktop/Desktop/AbhishekGoel/FJP5/Node/"
// treeFn(srcPath);




//   o/p
/*
└──download
        ├── d.doc
        ├── img.jpeg
        ├── m.mp3
        ├── m.mp4
        └──organized_files
                └──archives
                        ├── z.zip
                └──documents
                        ├── d.doc
                        ├── p.pdf
                        ├── t.txt
                └──images
                        ├── img.jpeg
                        ├── p.png
                └──media
                        ├── m.mp3
                        ├── m.mp4
                        ├── v.mkv
                └──miscellaneous
                        ├── pep.tv
        ├── p.pdf
        ├── p.png
        ├── pep.tv
        ├── t.txt
        ├── v.mkv
        ├── z.zip

        */