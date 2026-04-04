// * Problem 01
let youHave = 1000
let applePrice = 400
let orangePrice = 300
let foodCost = applePrice + orangePrice
let shopKeepersBack =  youHave - foodCost
console.log(shopKeepersBack); // 300


// * Problem 02
let math = 75.25
let bilology = 65
let chemistry = 80
let physics = 35.45
let Bangla = 99.50
let allSum = ((math + bilology + chemistry + physics + Bangla ) / 5)
console.log(allSum.toFixed(2)); // 71.04


// let  allsum = math + bilology + chemistry + physics + Bangla 
// let avaRage = allsum / 5
// console.log(avaRage.toFixed(2)); // 71.04



// * Problem 03
let num1 = 119
let givenNum = 5
console.log('reminder:',num1%givenNum); // 4


// * Problem 04
const a1 = isNaN('11')
console.log(a1); // false
const a2 = isNaN(11)
console.log(a2); //false
const a3 = isNaN('ABC')
console.log(a3); //true 
const a4 = isNaN(2-10)
console.log(a4); // false