//3.Ստեղծել RemoveSpecialChars կլաս, որը ժառանգում է  Transform կլասին: 
//_transform մեթոդը վերասահմանել այնպես, որ իր միջով անցնող տեքստից հեռացնել հատուկ սիմվոլները:
//Կլասից ստեղծել օբեկտ: homeworkr5.txt պարունակությունը pipe անել օբեկտով և պահապանել homeworkw5.txt ֆայլում:


const fs = require('fs');
const {Transform} = require('stream');  



const readableStream = fs.createReadStream('./input.txt', {
	highWaterMark: 1
});

const writeStream =fs.createWriteStream('homeworkw5.txt');


class RemoveSpecialChars extends Transform {
	_transform(chunk, encoding, next) {
        this.push(chunk.toString().toUpperCase());
        next();
	}

}