// Function constructor

console.log(name);//where comes this name? It comes from the window object. 
//Why window object has this property? I never define it.
//Actually, in Note 1, there is a function constructor, inside of it, you have 'this.name=...' keyword, if you create Person instance with 'new' keyword, it is ok.
//But, if you call it without 'new' keyword, like Note 2, the 'this' will point to window object, then the name is defined.
//Please note, if you comment out the Note 2 and other place that use Person directly, you still have 'name' logged in console, you have to close this chrome window and open an new window, then it is disappeard.
//It is because the chrome window object don't refresh when you reload the page, the 'name' property just stay there even you don't have it in the program.

//Another question, if you comment out the Note 2 and other place that use Person directly, and open a new tab, why the console.log(name) don't show like following:
// console.log(undefinedVar);
//It is because the 'name' property is predefined property in windows object.


console.log(this);

var john22  = {
    name : 'John222',
    yearOfBirth: this.name,//this is weird, why sometimes it show 'John12' sometimes it show "", is this a bug for chrome?
    //see the comment above.
    //when you define the object in this format, 'this' keyword in here is point to window object, 'this' keywork in method point to john22 object.
    abc: 'abc',
    j: this.abc,// this j is always show undefined, because you don't define 'abc' in window object.
    //yearOfBirth show empty string, it because the 'name' is predefined property in window object.
    w:this,//see, 'this' point to window object.
    job: 'teacher',
    // this.xxxxxx= 'xxxxxx', //you can't use this like inside of function.
    getInfo: function(){return '123'},
    calculateAge: function(param){
        console.log(this);
        console.log(this.yearOfBirth + ' ' + param)}
}

console.log(john22);
john22.calculateAge('abc');

//Capital letter means function constructor
//Note 1.
var Person = function(name, yearOfBirth, job){
    this.name = name;
    xxxxxyyyyy = name;//without 'this', it will defined inside of windows object.
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){//in here, each instance will have this function(each one will have its own function), it is not inheritance.
        console.log(2017-this.yearOfBirth);
        function showThis(){
            console.log(this);
        }
        showThis();
    }
    this.create = function(){
        console.log('I am here');
    }
       
    return '123';
    // return {a: 'a', b: 'b'};
    // return new Person2('HHH', 2000, 'BBB');//you can't use Person2 inside of Person. Maybe you can use it by move Person2 inside of Person.
    // return john22;

}

console.log(window);

//instantiation
//Please note, in javascript ES5, there is no concept 'class' it is just 'object'. Using 'new' before a function expression, you get an object, without 'new', it is just a normal function call.
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
var john_xxx = new Person('John', 1991, 'teacher');
console.log(john.calculateAge === john_xxx.calculateAge); //here, they are not same

john.calculateAge();

console.log(john);

//Here, we can see it is not have 'new', it become a normal function expression.
//firstly, you have to define the returned value in function, otherwise, you can't get it.
//secondly, the 'this' in side function point to Windows object.
// var john12 = Person('John12', 1000, 'aaa');
// console.log(john12);

// john12.calculateAge();//this not working.
// calculateAge();//this works.

console.log(Person);
//Here, when you log Person, it just show the soure code, but, Person is an Object, you can log its
console.log(Person.prototype);
console.log(Person.__proto__);
console.log(Person.__proto__abc);
console.log(john.prototype);
console.log(john.__proto__);
console.log(Person === Person.prototype.constructor);



var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

console.log(jane.calculateAge)
console.log(mark.calculateAge)
console.log(jane.calculateAge === mark.calculateAge)


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

console.log(john2.calculateAge === jane2.calculateAge)

console.log(john2);
console.log(john2.__proto__ === Person2.prototype);

//Ojbect.create

var personProto = {
    calculateAge: function(){
        console.log(2017 - this.yearOfBirth);
    },
    calculateAge2: function(){},
    a: 'a'

}

var john3 = Object.create(personProto);
john3.name = 'John';
john3.yearOfBirth = 1990;
john3.job = 'teacher';

console.log(john3);

var jane3 = Object.create(personProto,{//Please note, the syntax for define the object's properties: https://hackernoon.com/object-create-in-javascript-fa8674df6ed2
    name: { 
        writable: true,// if comment it out, the following setter is not working.
        configurable: true, //https://medium.com/@ayusharma.in/objects-writable-configurable-enumerable-365cdff6a408
        value: 'Jane'},//it is not {name: 'Jane', ....}
    yearOfBirth: { value: 1969},
    job: { 
        writable: true,
        value: 'designer'},
    nickname: {
        configurable: false,
        get: function() { return this.name; },
        set: function(value) {
            this.name = value;
          console.log('Setting `o.bar` to', value);
        }
    }
})

console.log(jane3)

console.log(jane3.nickname);

jane3.nickname = 'abc';

jane3.job = 'xxx';
jane3.abc = 'abc';
delete jane3.abc;
delete jane3.name;
delete jane3.job;

console.log(jane3);

// console.log(Object.create());//this is not working

console.log(Object.create(null));

console.log(Object.create(null,{a: {value: 'a'}}));

var john1234 = (new Person('John1234', 1000, 'aaa')).create(); //what's this?
var p1 = new Person('John1234', 1000, 'aaa').create(); //new have high precedence, but . have higher precedence, this is same as following:
console.log(p1);
// var p11 = Person('John1234', 1000, 'aaa').create(); // this is not working
// console.log(p11);
// here is the answer:
// https://stackoverflow.com/questions/17587808/why-does-new-date-tostring-work-given-javascript-operator-precedence

var p2 = new Person('John1234', 1000, 'aaa');
console.log((p2).create());
console.log(p2.create());

console.log(jane.create());
// console.log(jane2.create()); // why this is not allowed? what is the difference between jane2 and jane? Person has a method called 'create'
// console.log(jane3.create()); // why this is not allowed? what is the difference between jane3 and jane?
// Note 2:
// console.log(Person('John12234', 1000, 'aaa').create());
// john1234.create();
console.log(john1234);

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

change(age, obj);

console.log(age);
console.log(obj);