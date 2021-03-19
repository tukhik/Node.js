//3․ Ստեծել ֆունկցիա , որը input.txt ֆայլի պարունակությունը կկարդա ,
// հետո պարունակության տեքստը կկիսի երկու մասի և միաժամանակ կգրի առաջին մասը output1.txt ,
// իսկ երկրորդը output2.txt ֆայլերի մեջ։
// Օգտվել 'fs/promises' գրադարանից և օգտագործել async/await:
const fs = require('fs').promises;

async function readInput() {
    const fideData = await fs.readFile('./input.txt', 'utf-8');
    const firstPart = fideData.slice(0, fideData.length / 2);
    const secondPart = fideData.slice(fideData.length / 2);

    await Promise.all([
        fs.writeFile('output1.txt', firstPart),
        fs.writeFile('output2.txt', secondPart)
    ]);
}

readInput().then(() => {
    console.log('done');
}).catch((err) => {
    console.log(err);
});