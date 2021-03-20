//4.Ստեղծել Promise վերադարձնող ֆունկցիա որը ստանում է տեքստ ֆայլի 
//հասցե և տեքստի բառերի առաջին տառերը սաքում մեծատառ․ 

const fs = require('fs').promises;

async function firstLetterToUpperCase(path){
	const data = (await fs.readFile(path)).toString();

	await fs.writeFile(path, data.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '));

}

firstLetterToUpperCase('./input.txt').then(()=>{
	console.log('done');
})
