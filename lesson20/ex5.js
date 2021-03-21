//5.Գրել ծրագիր որ կկարդա Homework5 պապկայի ֆայլերը,  կստեղծի newDir պապկա և այնտեղ կտեղափոխի այն ֆայլերը 
//իրենց պարունակություններով որոնք 1kB մեծ են :

var fs = require('fs');

fs.mkdir('newDir', (err)=>{
	if(err){
		console.log(err);
	} else {
	fs.readdir('Homework5', (err, files)=>{
		if(err){
			console.log(err);
		} else {
			for(let item of files){
				if(fs.statSync('./Homework5/' + item)["size"] > 1000){
					let data = fs.readFileSync('./Homework5/' + item);
					fs.writeFileSync('./newDir/' + item, data, ()=>{
						if(err){
							console.log(err);
						}
					})
				}
			}
		}
	})
	console.log("Done");
	}
})