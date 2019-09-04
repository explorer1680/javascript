function A(){
    console.log(this);
}

A();

a = new A();

// in Javascript (at least ES5), there is no concept 'class'. Only object, everything in Javascript is an object
// the object comes from function with keyword 'new'