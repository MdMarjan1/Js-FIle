let unChange = 'Bnagladesh'
console.log(unChange);

// slice 
let a1 = 'Bangladeshsos'
console.log(a1.slice(1,6)); //angla

//split
let a2 = 'I am a Gentalman Bro'
let a3 = a2.split(' ')
console.log(a3);

let a4 = 'we never come America bro english man are not good'
let a5 = a4.split('e')
console.log(a5);

// join
let a6 = ['mango', 'orange', 'banana', 'Dragon', 'Blueberry']
let a7 = a6.join('+')
console.log(a7);

//include
let a8 = ['jekob', 'robin', 'devid', 'andu']
if(a8.includes('robin')){
    console.log('you are win');
}else{
    console.log('losser');
}

//concat
let a9 = ['jomin', 'asman', 'nodi', 'sagor']
let a10 = ['bmw', 'amg', 'royls', 'audi']
let a11 = a9.concat(a10)
console.log(a11);