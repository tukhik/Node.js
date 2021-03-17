//3․ Ստեծել ֆունկցիա , որը input.txt ֆայլի պարունակությունը կկարդա , հետո պարունակության տեքստը կկիսի 
//երկու մասի և միաժամանակ կգրի առաջին մասը output1.txt , իսկ երկրորդը output2.txt ֆայլերի մեջ։
//Օգտվել 'fs/promises' գրադարանից և օգտագործել async/await:

const fs = require('fs/promises');
const fileS = require("fs");  

async function read = fileS.readFile('input.txt', function (err, data) {  
   if (err) {  
       return console.error(err);  
   }  
   let str=data.toString()
  	str=str.split(" ").join("-")

   fileS.writeFile('output1.txt', str, ()=>{
   	console.log('written')
   }); 
}); 