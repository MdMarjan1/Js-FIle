// Problem 01
for(let time = 1; time<= 60; time++){
    console.log(time,'I will invest at least 6 hrs every single day');
}

// Problem 2
//odd
for(let ods = 61; ods<=100; ods++){
    if(ods%2===1){
        console.log(ods);
    }
}

//even
for(let evs = 78; evs<=98; evs++){
    if(evs%2===0){
        console.log(evs);
    }
}

//Problem 3
// odd sum
let O_sum = 0
for(let odds = 91; odds<=129; odds++){
    if(odds%2===1){
        O_sum+=odds
    }
}
console.log(O_sum);

// even sum
let E_sum = 0
for(let evvs = 51; evvs<=85; evvs++){
    if(evvs%2===0){
        E_sum+=evvs
    }
}
console.log(E_sum);