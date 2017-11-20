//Lecture: Arrays

var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948); //another way to create an array.

console.log(names);
console.log(years);

console.log(names[0]); //0 is first element
names[1] = 'Ben';

console.log(names);

//arrays can hold different data type.

var John =['Jhon', 'Smith', 1990, 'designer', false];

John.push('blue');//add an element to the end of the array.
John.unshift('Mr.');// add an element at the beginning of the array.
console.log(John);

var last = John.pop();// remove the last element, and return it.
console.log(last);
console.log(John);

var first = John.shift();// remove the first element, and return it.
console.log(first);
console.log(John);

var index = John.indexOf('Smith');//return the position of the element. 0 is beginning.
console.log(index);

if (John.indexOf('teacher') === -1){ //if it is not found in the array, it return -1
    console.log('John is not a teacher.');
}