function* process() {
    console.log('Start process 1');
    console.log('Pause process2 until call next()');

    yield;
    // return 5;  //you can finish it and return value by return.
    console.log('Resumed process2');
    console.log('Pause process3 until call next()');

    let parms = yield {age: 12};
    console.log("Passed by final process next(90): " + parms);

    console.log('Resumed process3');
    console.log('End of the process function');
    // return 3;
}

let _process = process();


let value0 = _process.next(100);
console.log(value0);
let value1 = _process.next(100);
console.log(value1);
let value2 = _process.next(60);
console.log(value2);

console.log(_process.next(70)); //finished generator always return {value: undefined, done: true}



function* one() {
  while(true) {
    var value = yield null;
  }
}
var g1 = one(); 
console.log(g1.next());
console.log(g1.next(1000)); 
console.log(g1.next(1000)); 

//how yield works
//1. it stop and return value. (even in the middle of a statement, it will stop)
//like "let j = yield i", "yield i" will stop, then "let j = yield" will run after resume.
//2. it resume and take parameter from next(), or it take parameter from next(), and resume.
//please note, it take parameter from next(), and set to the variable. (only from second call to next())

function* two() {
  var i = 20;
  while (true) {
    // i = i + (yield i); 
    i += yield i; //from second next(), the yield i will get parameter from next(), and calculate the i.
  }
}
var g2 = two(); 
console.log(g2.next(500)); //first call not working
console.log(g2.next(1000));
console.log(g2.next(200));

function* three(){
  var index = 0;
  while (true)
    yield index++;
}

 var g3 = three();
 console.log(g3.next());
 console.log(g3.next(1000));
 console.log(g3.next(1000));

 function* gen() {
    yield yield yield 5;
  }

var g4 = gen();
console.log(g4.next(10));
console.log(g4.next(10));
console.log(g4.next(10));

var g5 = gen();
console.log(g5.next());
console.log(g5.next());
console.log(g5.next());

