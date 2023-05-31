//Lecture: variables 1
console.log('Hello World')

var firstName = 'John';
var lastName = "Smith";
console.log(firstName + ' ' + lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);

//Lecture: variables 2
var name = 'John';
var age = 26;

console.log(name+26); //here, javascript automatically conver number to string.

var job, isMarried;
console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

// var lastName = prompt('What is the last name?');

console.log(lastName);

// alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

abcdef = 1; //Here, it seems that you don't need 'var' to declare a variable.
//https://stackoverflow.com/questions/1470488/what-is-the-purpose-of-the-var-keyword-and-when-to-use-it-or-omit-it
console.log(abcdef);

var xxx;
console.log(xxx); //undefined

yyy = 2;// you define variable, you don't need the key word 'var'
console.log(yyy);

// zzz; //this is an error here.
// console.log(zzz);// this is also an error.

www=null;//here is the use of null, please note, it is a 'null' not "Null" 
console.log(www);

var v1= 5+ null;
console.log(v1);

var v2= 5+ undefined;
console.log(v2);