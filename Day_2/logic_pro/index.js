import fs from "fs"

//Add two numbers
const a = 10;
const b= 20;
const sum = a+b

fs.writeFile("add.txt",`sum=${sum}`,(err)=>{
    if(err) throw err;
    console.log("sum written");

    fs.readFile("add.txt","utf8",(err,data)=>{
        if (err) throw err;
        console.log(" ",data);
        
    })
    
})

//Find the largest number



const x = 15;
const y = 20;
const largest = x > y ? x: y;

fs.writeFile("largest.txt", `Largest number = ${largest}`, (err) => {
  if (err) throw err;
  console.log(" Largest number written.");

  fs.readFile("largest.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("", data);
  });
});


//Check even or odd
const num = 8;
const result = num % 2 === 0 ? "Even" : "Odd";

fs.writeFile("evenodd.txt", `Number ${num} is ${result}`, (err) => {
  if (err) throw err;
  console.log(" Even/Odd written.");

  fs.readFile("evenodd.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("", data);
  });
});


//Check if person is adult
const age = 22;
const results = age >= 18 ? "Adult" : "Minor";

fs.writeFile("age.txt", `Age: ${age}\nPerson is ${results}`, (err) => {
  if (err) throw err;
  console.log(" Age status written.");

  fs.readFile("age.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("", data);
  });
});


//Check if a letter is vowel or consonant

const character = "e";
const vowels = "aeiouAEIOU";
const Result = vowels.includes(character) ? "Vowel" : "Consonant";

fs.writeFile("letter.txt", `Letter: ${character}\nType: ${Result}`, (err) => {
  if (err) throw err;
  console.log(" Letter type written.");

  fs.readFile("letter.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("", data);
  });
});


