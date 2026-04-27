let n1 = 0
while(n1 < 15){
     n1++
    if(n1%5 !== 0){
       continue
    }
    console.log(n1);
   
} 

// // array
let a69 = ['apple', 'banana', 'Orange', 'Dragon', 'Gowaba']
for(const fruit of a69){
   console.log(fruit);
}


let a70 = 1
while(a70 < 25){
    a70++
   if(a70%2 !== 0){
      continue
   }
   console.log(a70);
  
}


//Write a loop 1 to 200. Use break to exit the loop once you find 100.
let cen1 = 1
while(cen1 <= 200){
   console.log(cen1);
   if(cen1 === 100){
      break
   }
   cen1++
}


//Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
let w1 = 1
let v1 = 0
while(true){
   v1+=w1
   if(v1 >= 100){
      break
   }
   w1++
}
 console.log(v1);


// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

for(let sq = 1; sq <= 100; sq++){
   let root = Math.sqrt(sq)
   if(root == Math.floor(root)){
      console.log(sq);
      break
   }
}



//Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.

for(let ops = 1; ops <= 40; ops++){
   if(ops%2===1){
      continue
   }
   console.log(ops);
}


// display odd number from 55 to 85 and skip the numbers divisible by 5

for(let pos= 55; pos<=85; pos++){
   if(pos % 2 === 0 || pos % 5 === 0){
      continue
   }
   console.log(pos);
}