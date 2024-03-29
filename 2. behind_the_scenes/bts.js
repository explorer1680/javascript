
//Lecture: EC object
var name = 'John';

console.log(name ===window.name);//it is possible that window has a property called name, and its value is 'John'(not correct)
//everything we declare in global EC, is automatically attached to the window object as a property
//using object to test, primitive variable compare value, object compare reference.


var obj1 = {
    name: 'a',
    value: 'b'
}
console.log(obj1 ===window.obj1);
console.log(obj1 == window.obj1);

//Lecture: Hoisting

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

console.log(retirement);


//here is function expression, Hoisting is only work for function declarations.
//it is a variable, so, the value for it is set to undefined.
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
// vars a = 1;

// following is not an error:
// notdeclared = 5;
// console.log(notdeclared);

// following is a runtime error
// function test(){
//     console.log(abcdef);
// }

// test();

// var vs no var:

//without var
// abcdef = 123; //this works
// console.log(abcdef);
// abcdef = 123; //this is an runtime error

//with var

console.log(xyz);
var xyz = 'xyz'; // this is not an error

foo();
function foo(){
    console.log('inside foo(): ' + age);//note here, if you don't define 'age' inside this function, 
    //it will go to global EC to get 'age', but, if you have defined 'age' inside this funciotn,
    //it will using the 'age' inside function, that why it show 'undefined' here, when you comment out
    //the following definition, it will show 23. 
    //anthor thing need to notice here, the difference for hoisting of variable and function.
    //for function, you can use it before the place you define it;
    //for variable, you get 'undefined' before the place you define it.
    console.log('inside foo(): ' + name);//note here, it will go to global EC to get 'name'
    // var age = 65; //this is defining a new variable inside of function.
    age = 65; // this is using the global variable.
    // https://stackoverflow.com/questions/1470488/what-is-the-purpose-of-the-var-keyword-and-when-should-i-use-it-or-omit-it
    // this is different from the python.
    console.log('inside foo(): ' + age);
    // console.log('inside foo(): ' + notdeclared);
}

console.log(age); //23 or 65? it is depending on having 'var' or not inside of function foo().


//Lecture: Scoping
console.log('-------------------Scoping--------------------');
var a = 'Hello!';
a111();

function a111(){
    var b = 'Hi!';
    a222();

    function a222(){//you can find function a111 inside of Window object, but, you can't find a222 in Window nor inside of a111 object.
    //although, 'this' keyword inside of function a222 point to window object, you can't find it inside of Window object.
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

//we can see, the javascript also support create properties on the fly.
mike.abc = 'abc';
console.log(mike);