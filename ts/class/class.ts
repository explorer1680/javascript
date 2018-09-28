//class in ts is different from class in ES6, I think it based on ES6's class.

class Car{
    private speed: number;//you can use private to constain the access.
    name: string;//you have to define property before you can use it in constructor.
    //otherwise, you have to use following constructor:
    // constructor(private name, speed){ //if you use this one, you have to remove the definition above, it can't be deplicate.
    constructor(name, speed: number){//you can use type or not.
        this.name = name;
        this.speed = speed || 0;//set to 0 if it is a invalid value
    }


}

let car = new Car('Toyota', 100);
// let car = new Car('Toyota', '100');//use this if you comment out the speed': number'
console.log(car.name);
// console.log(car.speed);//error here