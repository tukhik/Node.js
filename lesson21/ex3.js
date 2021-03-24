//3. Server-ում ունենք users.json ֆայլ, որը զանգված է կազմված "fisrt_name", "last_name", "email", "age" 
//դաշտեր պարունակող օբյեկտներից ։ Ստեղծել սերվեր, որին հարցում ուղարկելիս եթե կա query-ի մեջ filter դաշտը , 
//վերադարձնել users.json-ից զանգված միայն այն օբյեկներից , 
//որոնց "fisrt_name" կամ "last_name" պարունակում է filter-ի արժեքը։

const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res)=>{
	let arr = [];
	


	res.setHeader('Content-Type', 'application/json');
  	let f = fs.readFile('users.json', function (err, data) {  
	   if (err) {  
	       return console.error(err);  
	   }  
   	let str=data.toString()
	res.end(str)
	//res.statusCode  = 200;
	}); 
	/*if(req.query.filter == f.fisrt_name || req.query.filter == f.last_name ){
		arr.push(f)
	} */
	console.log(req.query.filter)
    //res.end(JSON.stringify({user: "Sargis"}));

}).listen(3000)