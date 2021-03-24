//2.Server-ում ունենք sunny.txt ֆայլ: Ստեղծել սերվեր, որին հարցում ուղարկելիս եթե կա query-ի մեջ 
//file դաշտը և այն հավասար է "sunny", որպես response ստանա sunny.txt պարունակությունը այլապես 
//404 status-ով ստանա "File Not Found". (Օգտագործել Get մեթոդը):

const http = require('http');
const fs = require('fs');
const url = require('url');


http.createServer(function(req, res){
	if(req.url && req.url == "/sunny"){
	fs.readFile('sunny.txt', function (err, data) {  
	   if (err) {  
	       return console.error(err);  
	   }  
   	let str=data.toString()
	res.end(str)
	res.statusCode  = 200;
	});  
} else {
	res.statusCode  = 404;
	res.end("File Not Found")

	}
}).listen(3000)