/*
Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
*/
// let fol=['apple','mango','banana','orange','dragon']
// let fruit=fol[3]
// console.log(fruit);
// fol[2]='jambura'
// console.log(fol);



/*
Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
*/
// let tour = ['CoxsBazer', 'Sylhet', 'Bandorbon']
// tour.push('Sajek')
// tour.push('Thailand','Maldip')
// tour.pop()
// console.log(tour);


/*
3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
*/
// let books = ['MasudRana', 'drei cid', 'Bad habit', 'love Me']
// if(books.includes('javascript')){
//     console.log('Present');
// }
// else{
//     console.log('not');
// }


/*
4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/
let a1 = ['marjan', 'rifat', 'abdul', 'rohim']
let a2 = []
let a3 = 'i am a Men who are you?' 

if(Array.isArray(a1)){
    console.log('Its a Pure Array');
}else{
    console.log("not an Array");
}

if(Array.isArray(a2)){
    console.log('this is an Array');
}else{
    console.log('not men its not an array');
}

if(Array.isArray(a3)){
    console.log('i think its an Array');
}else{
    console.log('not an array');
}


/*
5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
*/
let drei1 = ['saiful', 'tamim', 'nadim', 'alvi']
let drei2 = ['jim', 'rafia', 'lambu', 'Mahi']

let mix = drei1.concat(drei2);
console.log(mix);
console.log(drei1);
console.log(drei2);