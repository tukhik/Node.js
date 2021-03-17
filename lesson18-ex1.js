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
  


