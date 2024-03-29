//Lecture: Arrow Function
// "use strict";

const years = [1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function (el) {
    return 2017 - el;
});

// var ages5 = years.map(Math.sqrt);//here it just need a function, argument is not needed.

console.log(ages5);

function agefun2(el) {
    return 2017 - el;
}

var ages52 = years.map(agefun2);//if you define function separately, you can pass it like this.
console.log(ages52);


//ES6

let ages6 = years.map(el => 2017 - el);//el is argument, '=>' is operator, '2017 - el' is return statement.
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2017 - el}`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}`
});
console.log(ages6);

//Lecture: Arrow Function2, Lexical 'this' keyword.
//the bigest advantage of Arrow Function is they share the surronding this keyword.
//unlike normal funciton, Arrow Function don't get their own 'this' keywork, again, Arrow Function don't have 'this' keyword,
//they simply using 'this' key word of function they are written in. So, we say, they have lexical 'this' variable.

//ES5

//define in global scope, 
var position = 100;
var color = 'red';

console.log(this);//'this' is Windows
console.log('In global scope: ' + this.position + ':' + this.color);

//define in document.
document.position = 200;
document.color = 'blue';

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {//this is method call, 'this' keyword point to its object.
        console.log(this);
        console.log(document.querySelector('.green'));
        document.querySelector('.green').addEventListener('click', function (e) {//this is function call, 
            //'this' keyword point to the 'div' object, it is not the windows object
            console.log(this); //you can see it is 'div' object defined in html(Window.document.body.children.div), but not 'Window' itself.
            console.log(e);//'e' means event
            function inline() {
                console.log(this);
            }
            inline();
            var str = 'from box5, This is box number ' + this.position + ' and it is ' + this.color + ', this box class name: ' + this.className;//this is not in global scope, nor under document object directly.
            alert(str);
        })
        return function () {
            console.log(this);//here it is window object
        }
    }
}

var f = box5.clickMe();
f;
console.log(f);
f();

//following is a work arround in ES5 for this situation:

var box52 = {
    color: 'orange',
    position: 10,
    clickMe: function () {
        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'from box52, This is box number ' + self.position + ' and it is ' + self.color;
            console.log(this);
            alert(str);
        })
    }
}

box52.clickMe();

//ES6
//is this ES6?

const box6 = {
    color: 'blue',
    position: 20,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'from box6, This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        })
    }
}

box6.clickMe();

const box62 = {
    color: 'green',
    position: 1,
    clickMe: () => {//this time, method is also defined by arrow function.
        //then, it share the lexical 'this' variable from its surroundings.
        //so, in here, you should not use arrow function.
        console.log(this);
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'from box62, This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        })
    }
}

box62.clickMe();

function Person(name) {
    this.name = name;
}

//ES5
Person.prototype.myFriends5 = function (friends) {

    console.log(this);//this is Person
    var arr = friends.map(function (el) {
        console.log(this);//this is window, if without bind
        return this.name + ' is frients with ' + el;
        // });//toggle comment for this line and next line, you can see the 'this' in above show object.
    }.bind(this));
    //another trick that we can use here is bind()
    //here, bind method will return an new function, and it can only bind one time, that means if you bind the returned new function with 
    //a new object, it will not change, but, that not means the bind can't be dynamic, here, the 'this' is dynamic to different object.


    console.log('the \'this\' in prototype is what you want: ' + this.name);
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
new Person('Smith').myFriends5(friends);

//ES6
Person.prototype.myFriends6 = function (friends) {

    // var arr = friends.map((el) =>{// or 

    // var arr = friends.map(el =>{ 
    //     return this.name + ' is frients with ' + el; 
    // });//when only line, we can do like this:

    var arr = friends.map(el => this.name + ' is frients with ' + el);//also, you can use template literals.
    //again, the arrow function's 'this' keyword is from surrounding function, which is under Person's prototype.
    //although, prototype property belong to Person, but, the function defined in its method, 
    //'this' keyword inside method always point to instance.

    console.log(arr);
}

new Person('John6').myFriends6(friends);
new Person('Smith6').myFriends6(friends);

where = 'in windows';
object1 = {
    where: 'in object',
    method_normal: function(){
        console.log(where);
        console.log(this.where)
    },
    // method_arrow1 = () =>{   //this is not a valid syntax
    //     console.log(where)
    // },
    method_arrow2: () =>{
        console.log(where);
        console.log(this.where)
    }
}

object1.method_normal();
// object1.method_arrow1();
object1.method_arrow2();

function F(){
    this.where = 'in Function'
    this.func = function(){
        console.log(this.where);
    }
    this.arrow = ()=>{              //the definition in here is not run until the new F() is called, 
        console.log(this.where);    //when that function is called, 'this' is point to the object itself.
    }
}

F.prototype.arrow_p = ()=>{
    console.log(this.where);
}
F.prototype.func_p = function(){
    console.log(this.where);
}

f_obj = new F();
f_obj.func();
f_obj.arrow();
f_obj.arrow_p();
f_obj.func_p();


var fun_expr = function(){
    this.where = 'in Function'
    this.func = function(){
        console.log(this.where);
    }
    this.arrow = ()=>{
        console.log(this.where);
    }
}
f_obj2 = new fun_expr();
f_obj2.func();
f_obj2.arrow();

class Person6 {
    constructor() {
    }
    where = 'in side class object';

    fun(){
        console.log(this.where);
    }

    func = function(){
        console.log(this.where);
    }

    arrow = ()=>{
        console.log(this.where);
    }
}

class_obj = new Person6();
class_obj.fun();
class_obj.arrow();
class_obj.func();