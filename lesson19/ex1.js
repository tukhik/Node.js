//1. Ստեղծել readStream որը input.txt-ից կկարդա ինֆորմացիան 10 բայթով և կաևտածի կոնսոլում այն chunk-երը , 
//որոնք հատուկ սիմվոլներ չունեն:


const fs = require('fs');


const readableStream = fs.createReadStream('./input.txt', {
	highWaterMark: 1024
});


readableStream.on('data', (chunk)=>{
	let reg = /^[a-zA-z0-9\s]+$/;
	let newChunk = chunk.toString().trim();
	if(reg.test(newChunk)){
		process.stdout.write(newChunk);
	}
});

readableStream.on('end', ()=>{
	console.log("\n Done")
})