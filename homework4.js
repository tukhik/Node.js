
//4.
const fs = require("fs");  
fs.readFile('input.txt', function (err, data) {  
   if (err) {  
       return console.error(err);  
   }  
   let str=data.toString()
  	str=str.split(" ").join("-")

   fs.writeFile('write.txt', str, ()=>{
   	console.log('written')
   }); 
});  
