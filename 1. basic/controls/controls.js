var name = 'John';
var age = 26;
var isMarried = 'no';

if(isMarried === 'yes'){
    console.log(name + ' is married!');
}else {
    console.log(name + ' will hopefully marry soon :)');
}

//'==' or '!=' does type coercion.
//'===' or '!==' does not.

if( 23 == '23'){//javascript convert 23 to a string '23'
    console.log('they are same');
}

if( 23 === '23'){//normally we use this.
    console.log('they are not same');
}

//Lecture: boolean logic and switch
var age = 16;

if ( age < 20 ){
    console.log('John is a teenager');
}else{
    console.log('John is a man.');
}

// AND(&&), OR(||), NOT(!)
var job = 'teacher';

switch(job){
    case 'teacher':
    console.log('John is a teacher');
    break;//if we don't have break, next console.log will be executed.
    case 'driver':
    console.log('John drives a cab.');
    break;
    case 'cop':
    console.log('John helps fight crime.');
    break;
    default:
    console.log('John does something else.');
}

//Lecture: Loops

// for loops
for(var i = 0; i < 10; i++){ //it calculate the condition, then log it, then do i++?
    /*
    0, true, print 0, update i to 1
    1, true, print 1, update i to 2
    ...
    9, true, print 9, update i to 10
    10, false, end loop!
    */
    console.log(i);
}

console.log(i); //actually, we can't test it print firstly or update firstly.

var names = ['John', 'Jone', 'Mary', 'Mark', 'Bob'];
for(var i = 0; i < names.length; i++){ //length is the property of array
    console.log(names[i]);
}
//Note, you can write to chrome's console directly. after the sign '>'

//while loops
var i = 0;
while(i <names.length){
    console.log(names[i]);
    i++;
}

//break mean break the loop.
for(var i = 1; i < 6; i++){
    console.log(i);
    if( i == 3) {
         break;
    }
}

//continue means end the current itrator of the loop, and go to next one.
for(var i = 1; i < 6; i++){
        if( i == 3) {
         continue;
    }
    console.log(i);
}


console.log('------------forEach---------------')

//forEach is from ES5
var a = ['1', '2', '3'];
a.forEach((element)=>{
    console.log(element);
})

console.log('------------for-in---------------')
//for-in, don't use it unless you know what it will do.
var b = [];
b[5] = 'c';
for(notdefinedvariable in b){//ES6, here, the variable don't need 'var' or 'const', why?
//the variable is key, not the value.
    console.log(notdefinedvariable);
    console.log(b[notdefinedvariable]);
}

console.log('------------for-of---------------')
var c =['a', 'b', 'c']
for(anothervariable of c){//ES6+, don't need 'var' or 'const'. the variable is value.
    console.log(anothervariable);
}
