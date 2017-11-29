//Lecture: Maps
//in ES5, we use object to 'hashmap' things, but the key is string.
//in ES6's map, key can be any thing: primitive, functions, objects.
//and, maps are iterable, and you can get it size, and you can delete element from it.
//so, it is better than object.

const question = new Map();
question.set('question', 'What is the official name of the latest javascript version?');

question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer:D');
question.set(false, 'Wrong, please try again!');

console.log(question);


console.log(question.get('question'));

console.log(question.size);

console.log(question.has(4));
//delete element
question.delete(4);
console.log(question);

console.log(question.has(4));

//loop
question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}.`));

//for loop
for (let [key, value] of question.entries()) {
    console.log(`This is ${key}, and it's set to ${value}.`);
}

for (let [key, value] of question.entries()) {
    if (typeof (key) === 'number') {
        console.log(`This is ${key}, and it's set to ${value}.`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));


//delete all
console.log(question.clear());//note, here show the return of the clear() method.
console.log(question);//here, show the map.
//it show 