//Lecture: Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//callback function
function calculateAge(year){
    return 2017 - year;
}

ages = arrayCalc(years, calculateAge);

console.log(ages);

function isAdult(el){
    return el >= 18;
}

var isAdults = arrayCalc(ages, isAdult);

console.log(isAdults);

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }else{
        return -1;
    }
}

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
