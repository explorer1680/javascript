let myString: string;
myString = 'this is a string';
// myString = 4; //error

// myVariable = 'abc';//you have to use let, const, var for variable.

//Type Script can infer the type
let myAnotherString = 'this is another string without :string';
myAnotherString = 'hello';//this is ok
// myAnotherString = 4;//this is an error.

//if we don't assign a value in declaration, ts can't infer the type.
let yetAnotherString;
// let yetAnotherString: any;//this line is same result as above line.
yetAnotherString = 'this is a string';
yetAnotherString = 4;//it is not an error.

//basic types:
let aString: string;
let aNumber: number;
let aBoolean: boolean;
let anArray: Array<string>;
let anyThing: any;
//or 'void' in function means return nothing, or 'enum'. 