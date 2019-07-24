
//Lecture: EC object
var name = 'John';

console.log(name ===window.name);//it is possible that window has a property called name, and its value is 'John'(not correct)
//everything we declare in global EC, is automatically attached to the window object as a property
//using object to test, primitive variable compare value, object comare reference.


var obj1 = {
    name: 'a',
    value: 'b'
}
console.log(obj1 ===window.obj1);
console.log(obj1 == window.obj1);

//Lecture: Hosting

//funcitons:

//call this function before it declaration. this function is hoisted in creation phase, then it is available in execution phase.
calculateAge(1965);

//check type
console.log(typeof calculateAge);
console.log(typeof retirement);// here is undefined

//here is function declaration
function calculateAge(year){
    console.log(2017-year);
}

// for function expression, calling it before is not working.
// retirement(1990);



//here is function expression, Hoisting is only work for function declarations.
var retirement = function(year){
    console.log(65 - (2017- year));
}

console.log('typeof retirement: ' + typeof retirement);// here is function, the reason why they are different is because
//var has undefined value when it is hoisting

retirement(1990);

//variables

console.log(age); //hoisting for variable will set to undefined

var age = 23;
console.log(age);

//for undeclared var, it is an error.
// console.log(notdeclared);
// but, you can see this is an run time error, it not stop the code above it to run.
// following is parse time error, it will stop the whole code to run.
//vars a = 1;

// following is not an error:
// notdeclared = 5;
// console.log(notdeclared);

// following is a runtime error
// function test(){
//     console.log(abcdef);
// }

// test();

foo();
function foo(){
    console.log('inside foo(): ' + age);//note here, if you don't define 'age' inside of this function, 
    //it will go to global EC to get 'age', but, if you have defined 'age' inside of this funciotn,
    //it will using the 'age' inside of function, that why it show 'undefined' here, when you comment out
    //the following definition, it will show 23. 
    //anthor thing need to notice here, the difference for hoisting of variable and function.
    //for function, you can use it before the place you define it;
    //for variable, you get 'undefined' before the place you define it.
    console.log('inside foo(): ' + name);//note here, it will go to global EC to get 'name'
    var age = 65;
    console.log('inside foo(): ' + age);
    // console.log('inside foo(): ' + notdeclared);
}

console.log(age);


//Lecture: Scoping
console.log('-------------------Scoping--------------------');
var a = 'Hello!';
first();

function first(){
    var b = 'Hi!';
    second();

    function second(){
        var c = 'Hey!';
        console.log(a + b + c);
        console.log(this);
    }
}

//Lecture: 'this' keyword
console.log('-------------------this keyword--------------------');

console.log(this);

calc();

function calc(year){
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2017 - this.yearOfBirth);

        // function can be declared inside of method.
        function innerFunction(){ //here is not a method, also it is declared inside of a method.
            console.log(this);//when regular function called, the 'this' pointing to default object.
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

//method borrow
mike.calculateAge = john.calculateAge;
mike.calculateAge();