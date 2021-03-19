//1.  Ստեղծել Promise վերադարձնող ֆունկցիա , որը գեներացնում է 0 - 10 միջակայքի թիվ և 
//ստուգում , եթե թիվը փոքր է 5-ից reject է անում , հակառակ դեպքում resolve . Աշխատացնել ֆունկցիան և տպել արժեքները։
const random = require('random');


new Promise((resolve, reject) => {
    const num = random.int(0, 10);

      if(num >= 5){
      	resolve("resolve "+ num)
      }else{
      	reject("reject "+num)
      }
}).then(
  result => console.log(result), 
  error => console.log(error)
)
  

//tarberak 2
/*const random = require('random');

function getNumber() {
    return new Promise((resolve, reject) => {
        const number = random.int(0, 10);

        if (number < 5) {
            reject(new Error('Number is less then 5'));
        } else {
            resolve(number);
        }
    });
}

getNumber().then((number) => {
    console.log(number);
}).catch((err) => {
    console.log(err.message);
})
*/