// Function constructor

var john22  = {
    name : 'John22',
    yearOfBirth: 1996,
    job: 'teacher',
    calculateAge: function(){console.log('I am just a fick function.')}
}

//Capital letter means function constructor
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){//in here, each instance will have this function(each one will have its own function), it is not inheritance.
        console.log(2017-this.yearOfBirth);
    }   
    return '123';
    // return new Person2('HHH', 2000, 'BBB');//you can't use Person2 inside of Person. Maybe you can use it by move Person2 inside of Person.
    // return john22;
}

//instantiation
//what new do: 
//1. a brand new empty object is created.
//2. the constructor funciton is called. calling a function create a new Execution Context, 
// in the normal function, 'this' variable point to the globle object,
// but, in here, 'this' point to the brand new empty object created in step 1.
// Here, you can see, the EC and object is not the same thing, but they are associated.
//3. if the constructor function don't return anything, which is in this case, then the new object is returned.
// item3 seems not correct, even it return '123', when using 'new', it return an object.
// maybe, it because '123' is primitive.
// yes, if you return an object, it will use that object as the new created object.
var john = new Person('John', 1991, 'teacher');

john.calculateAge();

console.log(john);

//Here, we can see it is not have 'new', it become a normal function expression.
//firstly, you have to define the returned value in function, otherwise, you can't get it.
//secondly, the 'this' in side function point to Windows object.
var john12 = Person('John12', 1000, 'aaa');
console.log(john12);

// john12.calculateAge();//this not working.
calculateAge();//this works.

console.log(Person);
//Here, when you log Person, it just show the soure code, but, Person is an Object, you can log its
console.log(Person.prototype);



var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');


//inheritance:
console.log('---------------------Inheritance----------------------')

var Person2 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person2.prototype.calculateAge = function(){//in here, it is inheritance way.
        console.log(this);
        console.log(2017-this.yearOfBirth);
}
Person2.prototype.lastName = 'Smith';
var john2 = new Person2('John', 1990, 'teacher');
john2.calculateAge();
var jane2 = new Person2('Jane', 1969, 'designer');
jane2.calculateAge();
var mark2 = new Person2('Mark', 1948, 'retired');
mark2.calculateAge();

console.log(john2.lastName);
console.log(jane2.lastName);
console.log(mark2.lastName);

//Ojbect.create

var personProto = {
    calculateAge: function(){
        console.log(2017 - this.yearOfBirth);
    }
}

var john3 = Object.create(personProto);
john3.name = 'John';
john3.yearOfBirth = 1990;
john3.job = 'teacher';

console.log(john3);

var jane3 = Object.create(personProto,{
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
})

console.log(jane3)

//Primitives vs Objects

//primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


//objects
var obj1 = {
    name: 'John',
    age: 26
}

var obj2 = obj1;

obj1.age = 30;

console.log(obj1);
console.log(obj2);

//Functions
var age = 27;
var obj = {
    name: 'Johns',
    city: 'Lisbon'
}

function change(a, b){
    a = 30;
    b.city = 'San Francisco';
}

change(a, obj);

console.log(age);
console.log(obj);