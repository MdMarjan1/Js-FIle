// * PROBLEM 01
let tkIhave = 1000
let apple1KG_orange1KG_Price = 700
let shopkeeperReturn = tkIhave -apple1KG_orange1KG_Price
console.log(shopkeeperReturn);


// * PROBLEM 02
let math = 75.25
let biology = 65
let chemistry = 80
let physics = 35.45
let Bangla = 99.50
let totalSum = math+biology+chemistry+physics+Bangla
let average = totalSum / 5
console.log(average.toFixed(2));


// * PROBLEM 03
let divideNumber = 5
let divitionNumber = 119
let remainder =  divitionNumber % divideNumber 
console.log(remainder);


// *PROBLEM 04
const a = isNaN('11')
console.log(a); //false

const b = isNaN(2-10)
console.log(b); //false

const c = isNaN('abcd')
console.log(c); //true

const d = isNaN(isNaN)
console.log(d); //true