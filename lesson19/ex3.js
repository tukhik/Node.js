//3.Ստեղծել RemoveSpecialChars կլաս, որը ժառանգում է  Transform կլասին: 
//_transform մեթոդը վերասահմանել այնպես, որ իր միջով անցնող տեքստից հեռացնել հատուկ սիմվոլները:
//Կլասից ստեղծել օբեկտ: homeworkr5.txt պարունակությունը pipe անել օբեկտով և պահապանել homeworkw5.txt ֆայլում:


const fs = require('fs');
const {Transform, Readable} = require('stream');  


class RemoveSpecialChars extends Transform {
	_transform(chunk, encoding, next) {
		 this.push(chunk.toString().replace(/[^a-zA-Z0-9\n\s\t]/g, ''));
        next();
	}

}
const transform = new RemoveSpecialChars();

const readable = fs.createReadStream('homeworkw5.txt');
const writeStream = fs.createWriteStream('homeworkr5.txt');

readable.pipe(transform).pipe(writeStream);

