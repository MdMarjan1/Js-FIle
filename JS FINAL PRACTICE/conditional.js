

/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
let burGer = 600
if(burGer >= 500){
    console.log('free coke');
}
else{
    console.log('30tk');
}


/*** 
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health 
category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/
let wiGht = 60
let hiGht = 1.8
let bmi = wiGht/(hiGht*hiGht)
if(bmi < 18.5){
    console.log('you are underweight');
}
else if(bmi >= 18.5 && bmi <= 24.9){
    console.log('you are normal');
}
else if(bmi >= 25 && bmi <= 29.9){
    console.log('you are overWeight');
}
else{
    console.log('you are obse');
}


/***
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
***/
let gpa = 40
if(gpa >= 90 && gpa <= 100){
    console.log('Grade A');
}
else if(gpa >= 80 && gpa <= 89){
    console.log("Grade B");
}
else if(gpa >= 70 && gpa <= 79){
    console.log('Grade C');
}
else if(gpa >=60 && gpa <= 69){
    console.log('Grade D');
}else{
    console.log('Grade F');
}



/***
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
let myNumber = 90
let friendNumber = 89
if(myNumber >= 80){
    if(friendNumber >= 80){
        console.log('Go for Lunch');
    }
    else if(friendNumber < 80 && friendNumber >= 60){
        console.log('good luck next time');
    }
    else if(friendNumber < 60 && friendNumber>= 40){
        console.log('friend msg unseen');
    }
    else{
        console.log('block your friend');
    }
}
else{
    console.log('me sleep');
}


/***
you have two numbers in two variables, called: num1, num2
now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value 
of the variable result will be the sum of num1 and num2.
write a simple if-else. 
also, write it using ternary operator.

 */
let num1 = 45
let num2 = 5
let mot = (num1 > num2) ? num1*num2 : num1+num2
console.log(mot);


/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let ticket = 500
let age = 50
let isStudent = false
if(age < 10){
    console.log('free ticket');
}else if( age >= 60){
    let disCount = ticket * 15 / 100
    let givenMoney = ticket - disCount
    console.log(givenMoney);
}else if(isStudent){
   let disCount = ticket * 50 / 100
   let givenMoney = ticket - disCount
   console.log(givenMoney)
}
else{
    console.log('you pay full fare',ticket,'tk');
}

// Marjan,.