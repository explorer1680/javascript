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

//function statement: it just perform an action, it does not produce an immediate result.
function someFun(par){
    //code
}

//function expression: it produce a value and outcome.
var someFun = function(par){
    //code
}

//Expressions
3 + 4;
var x = 3;

//statements
if(x === 5 ){
    //do something
}