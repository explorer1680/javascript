// Function constructor

var john  = {
    name : 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}

//Capital letter means function constructor
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){//in here, each instance will have this function(each one will have its own function), it is not inheritance.
        console.log(2017-this.yearOfBirth);
    }   
}

//intanciation
//what new do: 
//1. a brand new empty object is created.
//2. the constructor funciton is called. calling a function create a new Execution Context, 
// in the normal function, 'this' variable point to the globle object,
// but, in here, 'this' point to the brand new empty object created in step 1.
//3. if the constructor function don't return anything, which is in this case, then the new object is returned.
var john = new Person('John', 1990, 'teacher');

john.calculateAge();



var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');


//inheritance:

var Person2 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person2.prototype.calculateAge = function(){//in here, it is inheritance way.
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

var jane3 = Object.create(personProto,{
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
})

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