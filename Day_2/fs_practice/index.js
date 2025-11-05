import fs from "fs";

// fs.writeFile("filehandling.js", "Hello", (err) => {
//   if (err) {
//     console.log("error", err.message);
//   } else {
//     console.log("successful");
//   }
// });




// fs.readFile("filehandling.js",(err,data)=>{
//   if (err) {
//     console.log("error",err.message);
    
//   }else{
//     console.log(`data is ${data}`);
    
//   }
// })


// fs.appendFile("filehandling.js","\njayakumar",()=>{
//   console.log("done added");
  
// })


// fs.rename("filehandling.js","fileprocess.js",(err)=>{
//   if(err) throw err;
//   console.log("file renamed");
  
// })


// if (fs.existsSync("filehandling.js")) {
//   console.log("File exists");
// } else {
//   console.log("File not found");
// }


//folder

// fs.mkdir("node",()=>{
//   console.log("folder created");
  
// })





const username = "Jayakumar";
fs.mkdir(`./users/${username}`, () => {
  console.log("User folder created");
});
