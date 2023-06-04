//create object method1:
var a = {
    a: 'a',
    b: 'b',
    m: function(){
        console.log(this.a + this.b);
    }
}
console.log(a);

//create object method2:
var b = new Object();
b.a = 'a';
b.b = 'b';
b.m = function(){
    console.log(this.a + this.b);
}
console.log(b);

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

    state = 'happy'; //you can add property to object directly. it is added to the constructor by this.state automatically.

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
        console.log(this.state);
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
john6.calculateAge();

//You can't call it:
// john6.greeting();

//You can call it:
console.log(Person6);
console.log(Person6.greeting);
Person6.greeting();
//basically, Person6 class is function, function is an object, you can attach an method to an object.

//Class definition is not hoisterd, you can only define it firstly before you can use it.