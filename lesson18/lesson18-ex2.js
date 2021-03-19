//2․ ՈՒնենք config.json ֆայլ ,
// {
//     "host" : "localhost",
//     "port" : 3000
// }
//  պարունակությամբ ․ Ստեղծել սերվեր , որը լսում է json-ի մեջ լրացված հոսթին և պորտին։
// const config = require('./config.json');

const fs = require('fs').promises;
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("OK");
});

fs.readFile('./config.json').then((fileData) => {
    const config = JSON.parse(fileData.toString());
    server.listen(config.port, config.host);
}).catch(() => {

});
