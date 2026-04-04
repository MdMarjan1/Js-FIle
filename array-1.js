// *PROBLEM 01
let fruitsName = ['mango', 'banana', 'apple', 'Orange', 'Beetroot']
console.log(fruitsName[3]); // Orange
fruitsName[2]='jambura'
console.log(fruitsName);



// *PROBLEM 02
let touristPlace = ['Bandorbon', 'Sajek', 'Sylhet']
touristPlace.push('CoxsBazar')
touristPlace.push('Rangamati','Jaglong')
touristPlace.pop()
console.log(touristPlace);


// *PROBLEM 03
// let bookCounting = ['Python Book', 'Java Book', 'JavaScript Book', 'C++ Book']
// let cheakBook = bookCounting.includes('JavaScript Book')
// console.log(cheakBook,'the book is hare');


let bookcount = ['love story', 'war science', 'novel wall', 'herryPoter']
let chekBooks = bookcount.includes('love story')
if(chekBooks){
    console.log('true book here');
}
else{
    console.log('false not avaiable');
}



// *PROBLEM 04
let price = []
let stringOPP = '[]'
let iop = ['apple', 55, true, 'banana']
if(Array.isArray(price)){
    console.log("its a array Price true");
}else{
    console.log("its not price array");
}

if(Array.isArray(stringOPP)){
    console.log("Its a string array true");
}else{
    console.log("its not String false");
}

if(Array.isArray(iop)){
    console.log('Its a array TRUE');
}else{
    console.log("its not array FALSE");
}

// console.log(Array.isArray(price));
// console.log(Array.isArray(stringOPP));
// console.log(Array.isArray(iop));



// *PROBLEM 5
let bus = ['ana', 'greenlibe', 'emad', 'saudia']
let bike = ['r15', 'gxsr', 'persal', 'endfild']

let mix = bus.concat(bike)
console.log(mix);


