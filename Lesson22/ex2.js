//2. Ստեղծել express framework-ով web aplication : Ստեղծել /users route , որին կարող են 
//կատարել GET, POST , PUT և DETELE մեթոդներով request-ներ ։ Բոլորի դեպքում վերադարձնում որպես 
//response ժամը և մեթոդի անունը։

const http = requir('http');
const express = require('express');

const app = express();

http.createServer(app).listen(3000);

