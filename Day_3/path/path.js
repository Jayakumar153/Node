import path from "path"


const datas = "node/Day_3/path/path.txt"

console.log(path.dirname(datas));  // Returns folder: node/Day_3/path
console.log(path.basename(datas)); // Returns file name: path.txt
console.log(path.extname(datas));  // Returns extension: .txt


console.log(path.join("Jaya","kumar","sethil","kumar"));



console.log(path.resolve());

