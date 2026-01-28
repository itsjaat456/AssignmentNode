

// const fs = require("fs")
//   let a = fs.writeFileSync("a.txt","HIII")

//    function writeFile(Date, types, data){
//     let res = fs.writeFileSync("log.txt", `this is  logger file ${Date} and ${types} and ${data}`)
//     return res;

//    }
// let res = writeFile(new Date(), "Error", "this is erro ")
//    console.log(res);


// function writeFile(Date,types,data){
//      fs.writeFileSync("b.txt",`it is b file which have ${date} and ${types} and ${data}`);
//     return "file write successfully";
// }
// try{
//     let ans = writeFile(new Date(),"Error","this is error")
// console.log(ans);

// }

// catch(error){
//     console.log(error);
// }

const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname,"log.txt");

function createLog(date ,type ,data){
    fs.writeFileSync(
        logFile,`Date:${date}\nType: ${type} \n\n`
    );
    return "log create successfully";
}

try{
    let res = createLog(new Date(),"Error","this is error")
 console.log(res);
}
catch(error){
    console.log(error);
}

function readLog(){
    if(!fs.existsSync(logFile)){
        return "file does not exist";
    }
    
}

function updateLog(date,type,data){
    fs.appendFileSync(
        logFile,
        `Date : ${date}\nType: ${type} \n data ${data}\n\n`
    );
    return "Log updated Successfully";
}



// setTimeout(()=>{
//     console
// })

module.exports = { // d structure of functions or variable 
    createLog,
    updateLog,
    readLog
}