const http = require('http');
const express = require('express');

const app = express();

app.use('/', (req, res, next)=>{
	res.end("hom")
})

http.createServer(app).listen(2021);