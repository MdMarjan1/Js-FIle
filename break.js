// *Problem 01
// let a1 = 1
// while(a1 <= 200){
//     console.log(a1);
//     if(a1 === 100){
//         break
//     }
//     a1++
// }


// *Problem 02
//Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
let a2 = 1
let a3 = 0
while(true){
    a3+=a2
    if(a3 >= 100){
        break
    }
    a2++
}
//  console.log(a3);

//  *Problem 03

for(let a5 =2; a5 <= 100; a5++){
    let root = Math.sqrt(a5)

    if(root === Math.floor(root)){
        console.log(a5);
        break
    }
    
}






