/*1.  Ստեղծել homework իրադարձությունը լսող , որը կկանչի handler :
handler-ը պետք է արտածի Homeworks.txt պարունակությունը: emit անել homework :*/


const fs = require('fs').promises;
const {EventEmitter} = require('events');

const homework = new EventEmitter();
homework.on('homework', async() => {
	const data = await fs.readFile('./homework.txt', 'utf-8');
    console.log(data);
});

homework.emit('homework');

