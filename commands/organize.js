let fs = require("fs"); // fs module
let path = require("path"); // path module

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}

function organize(srcPath) {
    //1. to check if srcPath is present
    if(srcPath == undefined) {
        //The process.cwd() method returns the current working directory of the Node.js process.
        srcPath = process.cwd();
        //console.log(srcPath);
    }

    //2. to create a directory -> organized_files
    let organizedFiles = path.join(srcPath, "organized_files");
    //console.log(organizedFiles);

    // organizedFiles naam ka folder exits nhi krta to ek folder bana do warna rhne do
    if(fs.existsSync(organizedFiles) == false) {
        fs.mkdirSync(organizedFiles);
    }
    else console.log("Folder already exists");

    //3. scan the entire srcPath(download folder in this case)
                    //Reads the contents of the directory. -> read the names of files present in directory
    let allFiles = fs.readdirSync(srcPath);
    //console.log(allFiles);


    //4. travers over the files and classify them on the basis of their extension (.pdf, .mp3)
    for(let i = 0; i<allFiles.length; i++){
        //let extention = allFiles[i].split(".")[1];
        //alternte
        //let extention = path.extname(allFiles[i]);
        let fullPathOfFile = path.join(srcPath, allFiles[i]);
        //console.log(fullPathOfFile);
        //1. check if it is file or folder 
        //lstatsync gives information regarding the link provided
        let isThisAFile = fs.lstatSync(fullPathOfFile).isFile();
        if(isThisAFile) {
            //1.1 get extention name
            let extention = path.extname(allFiles[i]).split(".")[1];
            //console.log(extention);
            //1.2 get folder name from extension
            let folderName = getFolderName(extention); //archives
            //console.log(folderName);
            //1.3 copy from src folder (srcPath) and paste in dest folder (folder_name e.g. document, media etc)
                    //copy      kya copy kro    paste 
            copyFileToDest( srcPath, fullPathOfFile, folderName);
            }
        //console.log(extention);
    }

}

function getFolderName(extention) {
  
    //magic 
    for(let key in types) {
        //console.log(key);
        for(let i = 0; i<types[key].length; i++){
            if(types[key][i] == extention){
                return key;
            }
        }
    }
    //edge case ->  koi type ka extention match nhi kar raha to miscellaneous folder mai chal jayega file 
    return "miscellaneous";
}

function copyFileToDest(srcPath, fullPathOfFile, folderName){
    //1. folderName ka paath banana hai
    let destFolderPath = path.join(srcPath, "organized_files", folderName); // ........./downloads/organized_files/folderName(archives, media , etc)
    //2 check folder if exits, if it does not , then make folder 
    if(!fs.existsSync(destFolderPath)){
        fs.mkdirSync(destFolderPath);
    }
    //3 copy file from src folder to dest folder 
                      //basename -> Return the last portion of a path
    let fileName = path.basename(fullPathOfFile); // abc.zip
    let destFileName = path.join(destFolderPath, fileName);
    fs.copyFileSync(fullPathOfFile, destFileName);
}
  

// commenting because they are call from main.js
// let srcPath = "F:\\FileOrganizer\\download";
// organize(srcPath);


module.exports = {
    organize:organize
}