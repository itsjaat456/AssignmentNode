let {readLog,updateLog,createLog} = require("./Function.js");
let fs = require("fs")

function checkFile(){
    if(fs.existsSync("log.txt")){
       updateLog(new Date(),"error","this is error");
    }
    else{
        createLog(new Date(),"Error","this is error")
    }
}
try{
    console.log(checkFile());
}
catch(error){
    console.log(error);
}
checkFile()
module.export={
checkFile
}