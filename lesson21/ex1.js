//1.Գրել ծրագիր, որը կստուգի , եթե req.url /sunny է, ապա console-ում տպի Yes.

let http =  require('http');

http.createServer( function (request, response) {  
   if(request.url == '/sunny'){
   response.end(console.log('YES'))
	}
}).listen(3000);
