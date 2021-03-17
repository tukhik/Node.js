

//3
const os = require('os');
const fs = require("fs"); 

const str = String(os.cpus().length);
const num = String(Math.round((Math.random() *89999999 + 10000000)));
fs.writeFile(num + '.txt', str, ()=>{
   	console.log('written')
 })
