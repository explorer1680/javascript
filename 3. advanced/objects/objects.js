// Function constructor



//2 observations here:
//1. in following statement, name sometimes is '', sometimes has value
console.log(name);
//2. in following statement, it is an error
//console.log(undefinedVar);
//answer:
//1. name vs undefinedVar:
//It is because the 'name' property is predefined property in window object.
//2. Actually, in Note 1, there is a function constructor, inside it, you have 'this.name=...', if you create Person instance with 'new' keyword, it is ok.
//But, if you call it without 'new' keyword, like Note 2, the 'this' will point to window object, then the name property has value now.
//Please note, sometime when you toggle the Person() function call, you still have 'name' with value logged in console, you have to close this chrome window and open an new window, then it is shown ''.
//It is because the chrome window object don't refresh when you reload the page, the 'name' property just stay there even you don't have it in the program.




console.log(this);

var john22  = {
    name : 'John222',
    //scenario 1: this.xxxxxx= 'xxxxxx', //you can't use this like inside of function.
    yearOfBirth: this.name, //scenario 2: this point to window object.
    //this is weird, why sometimes it show 'John12' sometimes it show "", is this a bug for chrome?
    //see the comment above.
    //when you define the object in this format, 'this' keyword in here is point to window object, 'this' keywork in method point to john22 object.
    abc: 'abc',
    j: this.abc,// this j is always show undefined, because you don't define 'abc' in window object.
    //yearOfBirth show empty string, it because the 'name' is predefined property in window object.
    w:this,//see, 'this' point to window object.
    job: 'teacher',
    
    getInfo: function(){return '123'},
    calculateAge: function(param){
        console.log(this);  //scenario 3: this point to john22. //in method call, this point to object 
        console.log(this.yearOfBirth + ' ' + param);
        function oneMoreLayer(){
            console.log(this);// scenario 4: this point to window.
        }
        oneMoreLayer();
    }
}


john22.__proto__ = new Object();

console.log(john22);
john22.calculateAge('abc');

//Capital letter means function constructor
//Note 1.
var Person = function(name, yearOfBirth, job){
    //scenario 1: this depending on how Person is used, if it is call be function, this is point to window, if it is called by new, it point to object.
    this.name = name;
    //scenario 2:
    xxxxxyyyyy = name;//without 'this', it will defined inside of windows object, there is no difference between called by function or by called by new.
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){//in here, each instance will have this function(each one will have its own function), it is not inheritance.
        console.log(this);
        console.log(2017-this.yearOfBirth); ////scenario 3:  when you apply new, it create object, 'this' point to object; if you call it by function, 'this' point to window
        function showThis(){
            console.log(this);  //scenario 4: this is always point to window
        }
        showThis();
    };
    function aabbcc(){  //this definition is not an error, but calling aabbcc() is an error for both function call or new apply function call.
        console.log(this);
    };
    ccddee = function(){ //this defintion is not an error, but calling ccddee() ppint to window by function call, with new apply function call, calling object.ccddee() is an error.
        console.log(this);
    }
    this.create = function(){
        console.log('I am here');
    }
    //we don't need to memorize the above scenarios, just follow the following "instantiation" comments.
    //the function call will always create new EC object, for both normal function call and new apply function call, 
    //the new apply function call will create new object, 'this' point to this new object
    //by normal function, 'this' point to window.
    //statement inside of the function is executed same, only the 'this' is different.
    //why in scenario 3, this point to object, in scenario 4, this point to window?
    //in scenario 3, it is method call, so, it this point to object.

    // Function Execution Context
    // In the Function Execution Context, how the this keyword is determined depends on how a function is called or invoked.

    // A Javascript function can be invoked in four ways:

    // Invocation as a function
    // Invocation as a method
    // Invocation as a constructor
    // Invocation with the apply and call methods
       
    return '123';
    // return {a: 'a', b: 'b'};
    // return new Person2('HHH', 2000, 'BBB');//you can't use Person2 inside of Person. Maybe you can use it by move Person2 inside of Person.
    // return john22;
    // looks like the return here only apply to the function call, not affect new Person(...)? return 123 not affact, return {a: 'a', b: 'b'} affect.
}



Person('my_name', 1999, 'teacher');
console.log(Person('my_name', 1999, 'teacher'));

console.log(name);

console.log(window);

//instantiation
//Please note, in javascript ES5, there is no concept 'class' it is just 'object'. Using 'new' before a function expression, you get an object, without 'new', it is just a normal function call.
//what new do: 
//1. a brand new empty object is created.
//2. the constructor funciton is called. calling a function create a new Execution Context, 
// in the normal function, 'this' variable point to the globle object,
// but, in here, 'this' point to the brand new empty object created in step 1.
// Here, you can see, the EC and object are not the same thing, but they are associated.
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

personProto.calculateAge();

var john3 = Object.create(personProto);
john3.name = 'John';
john3.yearOfBirth = 1990;
john3.job = 'teacher';

console.log(john3);
john3.calculateAge();

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

var john1234 = (new Person('John1234', 1000, 'aaa')).create(); //what's this? new Person create an object, the create() is a method defined in Person(...)
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