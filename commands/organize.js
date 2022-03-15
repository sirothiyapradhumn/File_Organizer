let fs = require("fs"); // fs module
let path = require("path"); // path module

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}

function organize(scrPath) {
    //1. to check if scrPath is present
    if(scrPath == undefined) {
        //The process.cwd() method returns the current working directory of the Node.js process.
        scrPath = process.cwd();
        //console.log(scrPath);
    }

    //2. to create a directory -> organized_files
    let organizedFiles = path.join(scrPath, "organized_files");
    //console.log(organizedFiles);

    // organizedFiles naam ka folder exits nhi krta to ek folder bana do warna rhne do
    if(fs.existsSync(organizedFiles) == false) {
        fs.mkdirSync(organizedFiles);
    }
    else console.log("Folder already exists");

    //3. scan the entire scrPath(download folder in this case)
                    //Reads the contents of the directory. -> read the names of files present in directory
    let allFiles = fs.readdirSync(scrPath);
    console.log(allFiles);


    //4. travers over the files and classify them on the basis of their extension (.pdf, .mp3)
    for(let i = 0; i<allFiles.length; i++){
        //let extention = allFiles[i].split(".")[1];
        //alternte
        let extention = path.extname(allFiles[i]);
        console.log(extention);
    }

}

let scrPath = "F:\\FileOrganizer\\download";
organize(scrPath);