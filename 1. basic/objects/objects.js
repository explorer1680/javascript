//Lecture: Objects

//following is array
var arr = [1,2,3];
arr[0];

//following is object
var John = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(John);

console.log(John.lastName); //method 1 to retrieve info.
console.log(John['lastName']); //method 2 to retrieve info.

var xyz = 'job';
console.log(John[xyz]);
console.log(John.xyz);// the result is undefined.

John.lastName = 'Miller';
John[xyz] = 'programmer';

console.log(John);

//another way to create a object
var Jane = new Object();
Jane.name = 'Jane';
Jane.lastName = 'Smith';
Jane['yearOfBirth'] = 1969;
Jane[xyz] = 'retired';
Jane['isMarried'] = true;

console.log(Jane);

//Object methods
// Object can hold array, anther objects, functions.
// v1.0
var John = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'], //array
    calculateAge: function(){ //function expression, it is same as Note 1
        return 2017 -  this.yearOfBirth; 
    }
};

/*
Note 1:
var calculateAge = function(yearOfBirth){

}
*/

console.log(John);

console.log(John.family);
console.log(John.family[2]);

console.log(John.calculateAge);
console.log(John.calculateAge());//Object can cantain functions, and these functions are called methods.
console.log(John['calculateAge']);
console.log(John['calculateAge']());//here is same as property
console.log(John.calculateAge(1970)); // You see here, even you add a extra parameter to method, it still working.
//Array's function 'pop()', 'push()' also called methods.

var age = John.calculateAge();
John.age = age; //add new part to object later, it is same as definition of 'Jane'.

console.log(John);

//v2.0
// I think following John is a new object, it is different from the above John.
John2 = {
    name: 'John',
    // lastName: 'Smith',
    yearOfBirth: 1990,
    // job: 'teacher',
    // isMarried: false,
    // family: ['Jane', 'Mark', 'Bob'], 
    calculateAge: function(){ //you want to save to age property after calculation.
        // return 2017 -  this.yearOfBirth; 
        this.age = 2018 - this.yearOfBirth;//here, we don't use return statement.
    }
};
//here, name, lastName ... is properties, calculateAge is method.

console.log(John2.age === 28);
console.log(John2.age);
console.log(John2);

John2.calculateAge();// you have to call the method to get age property, 
//but, the above log() and next log() will have same output.
//Actually, this is not correct. The reason why it looks the same because you expend the object to see the details.
//If you comment out some properties from John2, make the display shorter, you will see it is not the same.
//This happens in Arrays test, when you see the output of John, it looks different, but,
//when you click to expend the object see the details, they are same.
//The reason why: when you reload the page, the program run, the output is status at running time, when you click to expend, the status will change to last moment, they are same now.


console.log(John2);