let a1 = `Lorem Ipsum is simply dummy text of the printing and typesetting indus
try. Lorem Ipsum has been the industry's standard dummy text ever since
the 1500s, when an unknown printer took a galley of type and scrambled it to 
make a type specimen book. It has survived not only five centuries, but also the
leap into electronic typesetting, remaining essentially unchanged. It was popularised
in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
 and more recently with desktop publishing software like Ald
us PageMaker including versions of Lorem Ipsum`

console.log("Word Count: ",a1.length)



let a2 = 'i am marjan i live in bangladesh'
let a3 = a2.toLocaleUpperCase()
console.log(a3)


let a4 = 'bangladesh is a small country'
console.log(a4.toLocaleUpperCase())

// * slice()
let a5 = 'I love Javascript'
let a6 = a5.slice(0,6)
console.log(a6) // l love

let a7 = 'United state of Bangladesh'
let a8 = a7.slice(16,26)
console.log(a8); //bangladesh

// *substring
let a9 = 'bangla is a nation'
let a10 = a9.substring(0,6)
console.log(a10);

//* trim
let a11 = "       abc     army           "
let a12 = a11.trim().toLocaleUpperCase()
console.log(a12);


//* use i verable 
let a13 = 5, a14 = 15
console.log(a13 + a14) // 20