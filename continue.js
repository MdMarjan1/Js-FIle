// *Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
for(let a1 = 1; a1 <= 40; a1++){
    if(a1 % 2 === 1){
        continue
    }
    // console.log(a1);
}

// * display odd number from 55 to 85 and skip the numbers divisible by 5.
for(let a2 = 55; a2 <= 85; a2++){
    if(a2 % 5 === 0 || a2 % 2 === 0){
        continue
    }
    console.log(a2);
}