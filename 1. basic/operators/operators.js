var now = 2017;
var birthYear = now - 26;
console.log(birthYear);

var ageJohn, ageMark;

ageJohn = ageMark = (3+5)*4 -6;
// here, the associativity take in place.
// for operator '=', the associativity is 'right-to-left'.
// firstly, ageMark = 26
// then, ageJohn = 26
console.log(ageJohn);
console.log(ageMark);


ageJohn++
ageMark *= 2;
console.log(ageJohn);
console.log(ageMark);