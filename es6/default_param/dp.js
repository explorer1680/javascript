//Lecture: Default parameters

//ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality){

    lastName === undefined ? lastName = 'Smith': lastName;
    nationality === undefined ? nationality = 'American': nationality;
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);

console.log(john);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
console.log(emily);

//ES6
function MillerPerson(firstName, yearOfBirth, lastName='Miller', nationality='American')
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

const john6 = new MillerPerson('John', 1990);
console.log(john6);

const emily6 = new MillerPerson('Emily', 1983, 'Diza', 'Spanish');
console.log(emily6);