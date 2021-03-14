
//5
var fs = require("fs"); 
var os = require('os')

var currentTime=function(){
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	return "_" + h + "_"+ m +"_" + s;
}
 var str='';

for(var i = 1; i < 5; i++){
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

