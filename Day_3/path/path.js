
import path from "path"


console.log(path);


const datas = "node/Day_3/path/path.txt"

console.log(path.dirname(datas));
console.log(path.basename(datas));
console.log(path.extname(datas));

// ipdi join kudutha elame join pni kudukum

console.log(path.join("Jaya","kumar","sethil","kumar"));

console.log(path.resolve());



// const filepath = path.join("node","Day_2","path","txt")

// const absolutepath = path.resolve(filepath)

// console.log("absolutepath:",absolutepath);

// fs.readFile(absolutepath,"utf8",(err,data)=>{
//     if(err){
//         throw err
//     }
//     console.log("File contents:\n", data);
    
// })





