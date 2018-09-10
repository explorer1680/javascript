var compare = {
    aaa: '',
    bbb: function () { console.log({ a: 'abc', b: this }) }//'this' point to compare not {}
}

compare.bbb();

var john22  = {
    name : 'John22',
    yearOfBirth: this.name,//'this' is not point this(current) object, it is point to window, the 'name' of windows is not defined in this file
    //actually, it is may defined in other file, and since you don't change it, it is show the name used in other file.
    job: 'teacher',
    getInfo: function(){return '123'},
    calculateAge: function(param){console.log(this.yearOfBirth + ' ' + param)}
}

console.log(john22);

var c = {
    ab : 'abc', 
    bc: this.ab//normally, it show undefined
}
console.log(c)