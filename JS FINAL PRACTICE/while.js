// "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
let timeSpend = 1
while(timeSpend <= 60){
    // console.log(timeSpend,'I will invest at least 6 hrs every single day for next 60 days!');
    timeSpend++
}


// Find all the odd numbers from 61 to 100.
let odD = 61
while(odD <= 100){
    if(odD % 2 === 1){
        // console.log('odd number',odD);
    }
     odD++
}


//Find all the even numbers from 78 to 98.
let eVen = 78
while(eVen <= 98){
    if(eVen % 2 === 0){
        // console.log('even number',eVen);
    }
    eVen++
}


// Display sum of all the odd numbers from 81 to 131.
let odd_sum = 81
let o_sum = 0
while(odd_sum <= 131){
    if(odd_sum % 2 === 1){
       o_sum+=odd_sum
    }
    odd_sum++
}
// console.log(o_sum);


// Display sum of all the even numbers from 206 to 311.
let even_sum = 206
let e_sum = 0
while(even_sum <= 311){
    if(even_sum % 2 === 0){
        e_sum+=even_sum
    }
    even_sum++
}
// console.log(e_sum);


// As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
let multi = 1
while(multi <= 10){
    console.log("5*"+multi,multi*5);
    multi++
}