//Class don't add anything new to Javascript, it is just syntax sugar to prototypes in heritance 
//In ES5, we build function constructors, and add method to their prototype property

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

var john5 = new Person5('John', 1990, 'teacher');

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

    //ES6 also have static method.
    static greeting(){
        console.log('Hey there!');
        console.log(this);//here, this is not point to Windows object, it point to Person6.
    }
}

const john6 = new Person6('John', 1990, 'teacher');

console.log(john5);
console.log(john6);

//You can't call it:
// john6.greeting();

//You can call it:
Person6.greeting();
//basically, Person6 class is function, function is an object, you can attach an method to an object.

//Class definition is not hoisterd, you can only define it firstly before you can use it.
//We can only add method to classes but not properties.
