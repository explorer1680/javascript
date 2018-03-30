//ES6
class Person7 {
    name;
    yearOfBirth;
    job;
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    //ES6 also have static method.
    static greeting(){
        console.log('Hey there!');
        console.log(this);//here, this is not point to Windows object, it point to Person6.
        console.log({a:'abc', b:this.apply})//in TS, here, 'this' is point to Person7
    }
    // j = {a:'abc', b: this.a}
    // the syntax in js file and ts file are different.

}