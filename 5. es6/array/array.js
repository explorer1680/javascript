// Lecture: Arrays

const boxes = document.querySelectorAll('.box'); //it return NodeList.
console.log(Array.isArray(boxes));
// boxes.forEach(cur => cur.style.backgroundColor = 'dodgerblue'); //also, it is not array, it still support this.



//ES5
var boxesArr5 = Array.prototype.slice.call(boxes); //convert to Array.
console.log(Array.isArray(boxesArr5));
// boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor = 'dodgerblue';
// });

//ES6
const boxesArr6 = Array.from(boxes); //new method from
console.log(Array.isArray(boxesArr6));
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


//normal for loop, we use forEach, or map, but, we can't 'break' or 'continue' in it.
//what above meaning?
//ES5
// for(var i = 0; i< boxesArr5.length; i++){
//     if(boxesArr5[i].className === 'box blue'){
//         continue;
//     }
//     boxesArr5[i].textContent = 'I changed to blue!';
// }
for(const cur of boxesArr5){//of loop
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue!';
}
//EX6
// for(const cur of boxesArr6){//of loop
//     if(cur.className.includes('blue')){
//         continue;
//     }
//     cur.textContent = 'I changed to blue!';
// }

//old: indexOf, new: findIndex, find

//ES5
var ages=[12,17, 8, 21, 14, 31];
var full = ages.map(function(cur){
    return cur >= 18;
});

console.log(full);
ind = full.indexOf(true);
console.log(ind);
console.log(ages[ind]);

//ES6, indexOf, findIndex, find only return the first one.
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 13));