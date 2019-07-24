interface User{
    username: string;
    password: string;
    confirmPassword?: string; //Optional properties, do not have to be implementated.
}

let user:User;

// user = {a: 'a'}; //this is not satisfied the interface.
user = {username: 'a', password: 'b'};//this is ok

interface CanDrive {
    accelerate(speed:number): void;
}

// let car:CanDrive = {//this will interfere with the 'car' in class/class.ts, why? is this a bug?
// no: https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
// using export {}
export{}
let car: CanDrive = {
    accelerate: function(speed: number){
        //...
    }
}
