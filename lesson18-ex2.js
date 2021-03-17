
/*2. ՈՒնենք config.json ֆայլ , 
{
    "host" : "localhost",
    "port" : 3000
}
 պարունակությամբ ․ Ստեղծել սերվեր , որը լսում է json-ի մեջ լրացված հոսթին և պորտին։*/


const http = require("http");
const fs = require('fs');

fs.readFile("config.json", function(error, data){
	if(error){
		return console.error(error);  
	}
	const server = http.createServer();

	server.listen(data.toString(), error => {
	if (error) {
	    return console.error(error)
	}
  console.log(`Server listening on port ${data.toString()}`)
})
})
