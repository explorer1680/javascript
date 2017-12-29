//Lecture: Rest parameters
//Let us pass arbitary number argument to the function.
//its use the same operator as spread operator, but it opposite to the spread operator.
//spread operator takes an array and transform to single values.
//Rest parameters received a couple of single values and transform them into an array when we call a function with multiple parameters.


//ES5
function isFullAge5(){
    console.log(arguments);//arguments is a keyword, it is similar to the 'this' keyword, each Execution Context get access to.
    //it is looks like Array, but it is not an Array. compare with the following output.
    //Here, we use Array.prototype.slice not Array.slice
    //the reason is array like [1,2], has the method slice, actully, it is and object of Array, and inheritence the slice() method for Array.prototype.
    //https://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work
    var argsArr = Array.prototype.slice.call(arguments);
    console.log(argsArr);
    argsArr.forEach(function(cur){
        console.log((2017-cur) >= 18);
    });
}

isFullAge5(1990, 2005, 1965);

isFullAge5(1990, 2005, 1965, 2017, 1987);

//ES6

function isFullAge6(...years){//what it do, it will transform the parsed argument to an Array call year.
    console.log(years);//you can see, it is Array.
    years.forEach(cur => console.log((2017-cur) >= 18));
}

isFullAge6(1990, 2005, 1965);

isFullAge6(1990, 2005, 1965, 2017, 1987);


console.log('------------------with limit ------------------------');
//ES5: handle usual parameters and arbitrary parameters.
function isFullAgewithLimit5(limit){
    console.log(arguments);//this include limit
    var argsArr = Array.prototype.slice.call(arguments, 1);//here is the key
    console.log(argsArr);//this exclude limit
    argsArr.forEach(function(cur){
        console.log((2017-cur) >= limit);
    });
}

isFullAgewithLimit5(20, 1990, 2005, 1965);

isFullAgewithLimit5(20, 1990, 2005, 1965, 2017, 1987);

//ES6: handle usual parameters and arbitrary parameters.

function isFullAgewithLimit6(limit, ...years){
    console.log(years);
    years.forEach(cur => console.log((2017-cur) >= limit));
}

isFullAgewithLimit6(18, 1990, 2005, 1965);

isFullAgewithLimit6(18, 1990, 2005, 1965, 2017, 1987);

