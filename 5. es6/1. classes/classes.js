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

Person5.prototype.date = {a: 'a'}

var john5 = new Person5('John', 1990, 'teacher');

console.log(john5);

//ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    state = 'happy'; //you can add property to object directly. it is added to the constructor by this.state automatically.
    // state are not go the prototype.
    
    age = 0;

    calculateAge() {    //only method defined here go to prototype.
        // var age = new Date().getFullYear() - this.yearOfBirth;       *** without defined age property, you can use this
        // console.log(age);
        this.age = new Date().getFullYear() - this.yearOfBirth;
        console.log(this.age);
        // console.log(age);                                            *** this is not working if using 'age' property, please not, here, it is not inner scope vs outer scope 
        console.log(this.state);
    }

    //ES6 also have static method.
    static greeting(){
        console.log('Hey there!');
        console.log(this);//here, this is not point to Windows object, it point to Person6.
        //it don't have access to object
        //where is this method located? in prototype? no
        //we just need to rememeber it.
    }

    //you can add getter/setter here:
    get theAge(){
        return this.age;
    }

    set theAge(age){
        this.age = age;
    }
}

const john6 = new Person6('John', 1990, 'teacher');


console.log(john6);
john6.calculateAge();
console.log(john6.theAge);

//You can't call it:
// john6.greeting();

//You can call it:
console.log(Person6);
console.log(Person6.greeting);
Person6.greeting();
//basically, Person6 class is function, function is an object, you can attach an method to an object.

//Class definition is not hoisterd, you can only define it firstly before you can use it.