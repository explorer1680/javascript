//Lecture: Functions.

function calculateAge(yearOfBirth){ //no type defined for parameter, no type defined for return value.
    var age = 2017 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1971);

console.log(ageJohn);

function yearsUntilRetirement(name, yearOfBirth){
    var age = calculateAge(yearOfBirth);
    var retirement = 65 - age;
    console.log(name + ' has ' + retirement + ' years to retirement.');
}

yearsUntilRetirement('John', 1971);

someFun('a');
// someFun2('b');

//function statement: it just perform an action, it does not produce an immediate result.
function someFun(par){
    //code
    console.log('I am in function statement!');
}

//function expression: it produce a value and outcome.
var someFun2 = function(par){
    //code
    console.log('I am in function expression!');
}

//Expressions
3 + 4;
var x = 3;

//statements
if(x === 5 ){
    //do something
}

console.log(someFun);
console.log(someFun2);

console.log(someFun());
console.log(someFun2());
