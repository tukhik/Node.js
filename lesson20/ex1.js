//1. Գրել ծրագիր որը կստեղծի ֆայլ Ձեր համակարգչի user անունով և այդ ֆայլում գրել համակարգչի userinfo-ն:

const fs = require('fs');
const os = require('os');

const user = os.userInfo();
console.log(user.username)

fs.writeFile(user.username + '.txt', JSON.stringify(user), (err)=>{
	console.log(err || "Done")
})