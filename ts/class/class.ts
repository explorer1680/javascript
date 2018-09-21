//class in ts is different from class in ES6, I think it based on ES6's class.

class Car{
    name: string;//you have to define property before you can use it in constructor.
    private speed: number;//you can use private to constain the access.
    constructor(name, speed: number){//you can use type or not.
        this.name = name;
        this.speed = speed || 0;//set to 0 if it is a invalid value
    }


}

let car = new Car('Toyota', 100);
// let car = new Car('Toyota', '100');//use this if you comment out the speed': number'
console.log(car.name);
// console.log(car.speed);//error here