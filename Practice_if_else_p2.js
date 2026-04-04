// *Problem 01
let buyBurger = 2000
if(buyBurger > 500){
    console.log(`If you buy burger more then 500tk you got free coke`);
}
else{
    console.log('Coke Extra 30tk');
}

// let burgerPrice = 100;
// let cokePrice = 30;
// t
// if (burgerPrice > 500) {
//     cokePrice = 0;
// }

// console.log("Total price:", burgerPrice + cokePrice);

// // *Problem 2
// let weight = 60
// let height = 1.8
// let bmi = weight/(height*height)
// if(bmi < 18.5){
//     console.log('UnderWeight');
// }else if(bmi >= 18.5 && bmi <= 24.9){
//     console.log('normal');
// }else if(bmi >= 25 && bmi <= 29.9){
//     console.log('Overweight');
// }
// else{
//     console.log("You Obese");
// }

// // *Problem 3
// let point = 75
// if(point >= 90 && point <= 100){
//     console.log("Grade GOLDEN");
// }else if(point >= 80 && point <= 89){
//     console.log("A+");
// }else if(point >= 70 && point <= 79){
//     console.log("A");
// }else if(point >= 60 && point <= 69){
//     console.log("A-");
// }else{
//     console.log("FAIL");
// }

// * Problem 4
// let myScore = 88
// let friendScore = 55

// if(myScore > 80){
//     if(friendScore > 80){
//         console.log('go for a lunch');
//     }else if(friendScore >= 60 && friendScore < 80){
//         console.log('good luck next time');
//     }else if(friendScore >= 40 && friendScore < 60){
//         console.log('friend massage unseen');
//     }else if(friendScore < 40){
//         console.log('block my friend');
//     }
// }
// else{
//     console.log('i will sleep');
// }


// *Problem 06
// let num1 = 40
// let num2 = 30

// let result = num1 > num2 ? num1*num1 : num1+num2
// console.log(result);

// * Problem 06
let stuDent = false
let PassenGer_age = 25
let regularFare = 800

if(PassenGer_age < 10){
    regularFare = 0 
}
else if(stuDent){
  regularFare = regularFare * 0.5
}
else if(PassenGer_age >= 60){
    regularFare = regularFare * 0.85 
}
// else{
//     regularFare 
// }

console.log("Ticket Price:",regularFare);
