//Lecture: Arrow Function

const years = [1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function(el){
    return 2017 - el;
});

// var ages5 = years.map(Math.sqrt);//here it just need a function, argument is not needed.

console.log(ages5);

function agefun2(el){
    return 2017 - el;
}

var ages52 = years.map(agefun2);//if you define function separately, you can pass it like this.
console.log(ages52);


//ES6

let ages6 = years.map(el => 2017 -el);//el is argument, '=>' is operator, '2017 - el' is return statement.
console.log(ages6);

ages6 = years.map((el, index) =>`Age element ${index + 1}: ${2017-el}`);
console.log(ages6);

ages6 = years.map((el,index) =>{
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
    clickMe: function(){//this is method call, 'this' keyword point to its object.
    console.log(this);
        document.querySelector('.green').addEventListener('click', function(e){//this is function call, 
            //'this' keyword point global object, which is window object(the 'div' object)
            console.log(e);//'e' means event
            var str = 'This is box number ' + this.position + ' and it is '+ this.color;//this is not in global scope, not under document object directly.
            console.log(this); //you can see it is 'div' object defined in html(Window.document.body.children.div), but not 'Window' itself.
            alert(str);
        })
    }
}

// box5.clickMe();

//following is a work arround in ES5 for this situation:

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position + ' and it is '+ self.color;
            alert(str);
        })
    }
}

// box5.clickMe();

//ES6

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is '+ this.color;
            alert(str);
        })
    }
}

// box6.clickMe();

const box62 = {
    color: 'green',
    position: 1,
    clickMe: () => {//this time, method is also defined by arrow function.
        //then, it share the lexical 'this' variable from its surroundings.
        //so, in here, you should not use arrow function.
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is '+ this.color;
            alert(str);
        })
    }
}

box62.clickMe();

function Person(name){
    this.name = name;
}

//ES5
Person.prototype.myFriends5 = function(friends){

    var arr = friends.map(function(el){
        // console.log(this);
        return this.name + ' is frients with ' + el; 
        
    }.bind(this));//another trick that we can use here is bind()
    //here, bind method will return an new function, and it can only bind one time, that means if you bind the returned new function with 
    //a new object, it will not change, but, that not means the bind can't be dynamic, here, the 'this' is dynamic to different object.

    console.log(this);
    console.log('the \'this\' in prototype is what you want: '+ this.name);
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
new Person('Smith').myFriends5(friends);

//ES6
Person.prototype.myFriends6 = function(friends){

    // var arr = friends.map((el) =>{// or 

    // var arr = friends.map(el =>{ 
    //     return this.name + ' is frients with ' + el; 
    // });//when only line, we can do like this:

    var arr = friends.map(el => this.name + ' is frients with ' + el);//also, you can use template literals.
    //again, the arrow function's 'this' keyword is from surrounding function, which is under Person's prototype.
    //although, prototype property belong to Person, but, the function defined in it is method, 
    //'this' keyword inside method always point to instance.

    console.log(arr);
}

new Person('John6').myFriends6(friends);
new Person('Smith6').myFriends6(friends);