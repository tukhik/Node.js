
//5
const fs = require("fs"); 
const os = require('os')

const currentTime=function(){
	const date = new Date();
	const h = date.getHours();
	const m = date.getMinutes();
	const s = date.getSeconds();
	return "_" + h + "_"+ m +"_" + s;
}
 let str='';

for(let i = 1; i < 5; i++){
	fs.readFile('homework'+`${i}` + '.js', function (err, data) {  
	   if (err) {  
	       return console.error(err);  
	   }  
  
   str += data.toString()
   //console.log(str)
   var fileName = currentTime()

   fs.writeFile(`${os.platform()+fileName}` + '.txt', str + "\n", ()=>{
   });  
});  
}

