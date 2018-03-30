var compare = {
    aaa: '',
    bbb: function () { console.log({ a: 'abc', b: this }) }//'this' point to compare not {}
}

compare.bbb();

var john22  = {
    name : 'John22',
    yearOfBirth: this.name,//name is special, it show ""
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