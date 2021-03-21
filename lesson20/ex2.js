//2. Գրել ծրագիր որ նախորդ առաջադրանքի կողմից ստեղծված ֆայլ կանվանափոխի այդ պահի ամիս, օր, ժամ, րոպեով, 
//վայրկյանով (Օրինակ 10_11_15_32_13.txt):
const os = require('os');
const fs = require("fs");  

const username=os.userInfo().username;
const date = new Date();


let txtName = date.getDate() + "-" + date.getMonth() + 1 + "-"+ date.getHours() + "-"+ date.getMinutes() + "-"+
date.getSeconds();

fs.rename(username+'.txt',txtName+'.txt', function (err, data) {  
    if(err){
		console.log(err);
     } else{
		console.log('File successfully renamed');
	}
}); 