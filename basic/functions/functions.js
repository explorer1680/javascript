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
console.log(someFun);//Here, someFun is a function.
console.log(someFun2);//Here, someFun2 is undefined.

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

console.log(someFun);//Here, someFun is a function, same as above.
console.log(someFun2);//Here, someFun2 is a function, it is different from above.

console.log(someFun());
console.log(someFun2());
