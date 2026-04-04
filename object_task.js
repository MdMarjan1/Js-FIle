/* const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

Access the golden rod color value in output.
*/

const colors ={
    red:  "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
}
    const col = colors[ "golden rod"]
    console.log(col);

    

/*
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

For this object below add a property named passenger capacity with value 5
*/

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
const total = car['passenger capacity'] = 5
console.log(total);


/*
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
Display the physics marks as output.
*/

const students = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(students.physics.marks);


/*
Task 4

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
Count the number of properties.
*/

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let kok = 0
for(let count in student){
   kok++
}
 console.log('key count:',kok);

// let opo = Object.keys(student).length
// console.log(opo);



/*
Task 5

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true

Loop through an object and print the key-value pairs with their types

*/

    let isc = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    }   
    for(let hsc in isc){
        console.log("key:",hsc,"|","type:",typeof isc[hsc]);
    }

