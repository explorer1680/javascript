function A(){
    // console.log(this);
}

A();

a = new A();

console.log(a);

console.log(A);

console.log(A.prototype);

f = A.prototype.constructor;
console.log(f);

a2 = new f();
console.log(a2);

console.log(A === f);
console.log(A === f.prototype.constructor);

console.log(a.__proto__ === A.prototype);
console.log(a.prototype);

console.log({a:'a'});

// in Javascript (at least ES5), there is no concept 'class'. Only object, everything in Javascript is an object
// the object comes from function with keyword 'new'