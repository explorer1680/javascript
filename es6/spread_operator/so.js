//Lecture: Spread Operator
//new function in ES6

function addFourAges(a, b, c, d){
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);//apply accept an array.
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

//
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);


//for NodeList
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');


//this operator also works for object, it is used to copy the object, and keep the last one.
//this is used in ngrx to update the store.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
obj1={a:'a', b:'b'};
obj2={a:1, b:2};
copyed={...obj1, ...obj2, b:'12'};
console.log(copyed);