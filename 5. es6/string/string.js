//Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2017 - year;
}

//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

//ES6 
//Template literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

//ES6 new methods
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.startsWith('j'));

console.log(n.endsWith('th'));
console.log(n.endsWith('Sm'));

console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));