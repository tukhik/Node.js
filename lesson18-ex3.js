//3․ Ստեծել ֆունկցիա , որը input.txt ֆայլի պարունակությունը կկարդա , հետո պարունակության տեքստը կկիսի 
//երկու մասի և միաժամանակ կգրի առաջին մասը output1.txt , իսկ երկրորդը output2.txt ֆայլերի մեջ։
//Օգտվել 'fs/promises' գրադարանից և օգտագործել async/await:

const fs = require('fs/promises');
const fileS = require("fs");  

/*async function f() {

  let promise = new Promise((resolve, reject) => {
    fs.readFile('input.txt', function (err, data) {  
   if (err) {  
       return console.error(err);  
   }  
   let str=data.toString()
  	str=str.split(" ").join("-")

   fs.writeFile('output1.txt', str, ()=>{
   	console.log('written')
   }); 
});  
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
*/

/*fileS.readFile('input.txt', function (err, data) {  
   if (err) {  
       return console.error(err);  
   }  
   let str=data.toString()
  	str=str.split(" ").join("-")

   fileS.writeFile('output1.txt', str, ()=>{
   	console.log('written')
   }); 
});  */


async function read() {
    const data = await Promise.all([
        readFile('input.txt'),
    ]);
    return 1;
}

function read2() {
    return new Promise(function (resolve, reject) {
        resolve(1);
    });
}


read().then(function (data) {
    console.log(data);
});