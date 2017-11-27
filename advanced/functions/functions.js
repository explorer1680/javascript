//Lecture: Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//callback function
function calculateAge(year){
    return 2017 - year;
}

ages = arrayCalc(years, calculateAge);

console.log(ages);

function isAdult(el){
    return el >= 18;
}

var isAdults = arrayCalc(ages, isAdult);

console.log(isAdults);

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }else{
        return -1;
    }
}

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);


//Lecture: Functions returning functions

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is');
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    }else{
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');

console.log(teacherQuestion);
teacherQuestion('John');
console.log(teacherQuestion('John'));

var desingerQuestion = interviewQuestion('designer');
desingerQuestion('John');


interviewQuestion('teacher')('Mark'); //this is valued from left to right. (functions associativity is from left to right)

//Immediately invoked function expressions(IIFE)
//this is not to creating the code we will reuse, it is just creating data privacy.

//to create a 'private' var score, following is one way
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

//to create a 'private' var 'score', follwing is another way.
(
    function(){
            var score = Math.random() * 10;
    console.log(score >= 5);
    }
)();

//following is function declaration, but it has no name, it will through error.
// function(){}

//put it into a (), is a trick, javascript will treat everything inside of () as expression.
(function(){});

//following is call this function:
(function(){})();

//if you define variable inside of this function, it is "private". 

//pass value to IIFE
(
    function(goodLuck){
            var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
    }
)(5);


//Lecture: closures

console.log('------------------Closures---------------------')

function retirement(retirementAge){
    var a = ' years left until retirements'; //this part is defined outside of the returning function.
    return function(yearOfBirth){
        var age = 2017 - yearOfBirth;
        console.log((retirementAge - age) + a); //this 'retirementAge' is defined in the outer function's parameter.
    }
}

var retirementUS = retirement(66);//when the function returned, "retirement"'s Execution Context has pop up. This is called closure.
retirementUS(1971); 

retirement(66)(1990);

//Lecture: Bind, call and apply
console.log('Bind, Call and Apply');

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I \'m ' + 
            this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');//Note, here, 'this' keyword.
        }else if(style === 'friendly'){
            console.log('Hey! What\'s up? I \'m ' + 
            this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }else{
            console.log('something not correct but not an error!');//
        }
    }
}

john.presentation('formal', 'morning');
john.presentation('friendly', 'afternoon');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

//call method:
//this is called method borrowing
john.presentation.call(emily, 'friendly', 'afternoon'); //first parameter is this element,

//apply method: it set first paramter for 'this', second parameter as array.
//this is not working because our method don't expect array, but, it is throw error.
john.presentation.apply(emily, ['friendly', 'afternoon']); 

//bind, bind allow us to preset some arguments.
var johnFriendly = john.presentation.bind(john, 'friendly'); //here, you just provide the first parameter, and get a function.
johnFriendly('morning'); //here, you provide the second parameter.
johnFriendly('night');
//this is called Currying. we create a function based on another function but with some preset paramter.

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');