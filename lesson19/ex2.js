//2.Գրել ծրագիր որ լատինատառ տեքստը որևէ մոտավորությամբ կսարքի հայատառ: Օրինակ ա տառը կդառնա a:Այդպես բոլոր տառերը:
// Ստեղծել readStream և highWaterMark:1  նշելով բոլոր սիմվոլների վրայով անցնել: Ծրագիրը աշխատացնել homework4Eng.txt համար:

const fs = require('fs');

const readableStream = fs.createReadStream('./homework4Eng.txt', {
	highWaterMark: 1
});

const writeStream =fs.createWriteStream('homework5Arm.txt');

let engArm={
        a : 'ա',
		b : 'բ',
		g : 'գ',
		d : 'դ',
		e : 'ե',
		z : 'զ',
		e : 'է',
		y : 'ը',
		t : 'թ',
		i : 'ի',
		l : 'լ',
		x : 'խ',
		k : 'կ',
		h : 'հ',
		m : 'մ',
		y : 'յ',
		n : 'ն',
		o : 'ո',
		p : 'պ',
		j : 'ջ',
		r : 'ռ',
		s : 'ս',
		v : 'վ',
		t : 'տ',
		r : 'ր',
		c : 'ց',
		w : 'ւ',
		p : 'փ',
		q : 'ք',
		o : 'օ',
		f : 'ֆ',
		u : 'ու',
	}

readableStream.on('data', (chunk) => {
	let index=chunk.toString().toLowerCase()
	console.log(index)
	if(engArm[index]==undefined){
		writeStream.write(' ')
	}else{	
		writeStream.write(engArm[index])
	} 
});

readableStream.on('end', () => {
    console.log('DONE');
});