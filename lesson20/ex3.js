//3.Գրել ծրագիր, որը կկարդա homework3.txt ֆայլի պարունակությունը, տեքստից կհեռացնի  
//ստորակետները  և կգրի replace.txt ֆայլում, որից հետո ջնջել homework3.txt ֆայլը:


const fs = require('fs');
const {Transform, Readable} = require('stream');


class RemoveChars extends Transform {
	_transform(chunk, encoding, next){
		this.push(chunk.toString().replace(/[,]\g/, ''));
		next();
	}
}

const transform = new RemoveChars();
const readable = fs.createReadStream('homework3.txt');
const write = fs.createWriteStream('test.txt');

readable.pipe(transform).pipe(write);

fs.unlink('homework3.txt', ()=>{
	console.log('end')
})



