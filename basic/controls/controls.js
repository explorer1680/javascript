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