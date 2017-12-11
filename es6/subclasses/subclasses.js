//ES5

var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'engineer');
console.log(john5);


var Athlete5 = function (name, yearOfBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);//this is only setup property, not setup prototype chain.
    this.olymicGames = olymicGames;
    this.medals = medals;
}

// Athlete5.prototype.wonMedal = function () {//this definition will lost after Object.create(...)
//     this.medals++;
// }

Athlete5.prototype = Object.create(Person5.prototype);//set up prototype chain
//Here is set up a prototype chain, but, the Athlet5.prototype point to an object its prototype is Person5.prototype.
//it is not the Athlet5.prototype point to Person5.prototype.
//the structure of Athlete5 is not same as Athlete6.
//because when you using above expression, the constructor is lost.

Athlete5.prototype.wonMedal = function () {// this part has to be after the Object.create(...)
    this.medals++;
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.wonMedal();



console.log(johnAthlete5);

johnAthlete5.calculateAge();
//look at the console: __proto__: Person5, means what?

//ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olymicGames, medals) {
        super(name, yearOfBirth, job);
        this.olymicGames = olymicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
console.log(johnAthlete6);
johnAthlete6.calculateAge();