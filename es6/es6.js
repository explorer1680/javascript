//Lecture: let and const
console.log('------------------let and const-----------------');


// ES5
var name5 = 'Jane Smith';
var age5 = 23;
names = 'Jane Miller';//we can change it.
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23; //let is same as 'var' in ES5.
// name6 = 'Jane Miller'; // this will throw error
console.log(name6); 

//difference: 
//1.
//variable defined by var is function scope
//variable defined by const, let are block scope. (block defined by '{}')
//2.
//you can access variable before it is declared.

//ES5
function driversLicence5(parssedTest){
    if(parssedTest){
        console.log(firstName);//here is undined
        var firstName = 'John';
        var yearOfBirth = 1990;

        // console.log(firstName + ' born in ' + yearOfBirth + ', is now offcially allowed to drive a car.');
    }

    console.log(firstName + ' born in ' + yearOfBirth + ', is now offcially allowed to drive a car.');
}

driversLicence5(true);

// let firstName = 'a';
// const yearOfBirth = 2990;//these variables still available to following console.log() outside of block.

//ES6
function driversLicence6(parssedTest){
    if(parssedTest){
        // console.log(firstName);// here is error: firstName is not defined
        // here is something call temporal dead zone, that means the variables are hoisted,
        // but we can't access variable before it is declared.
        let firstName = 'John';
        const yearOfBirth = 1990;

        console.log(firstName + ' born in ' + yearOfBirth + ', is now offcially allowed to drive a car.');
    }
    //variable declared by let and const are not avaiable outside of the block
    // console.log(firstName + ' born in ' + yearOfBirth + ', is now offcially allowed to drive a car.');//here is an error.
}

driversLicence6(true);


// Lecture: Blocks and IIFEs
console.log('---------------------Blocks and IIFEs-----------------');

//ES5
(function(){
    var c = 3;
})();


//ES6
{//here we create a block
    const a = 1;
    let b =2;
    var c = 3;
}

// console.log(a+b); //this is an error.
console.log(c);