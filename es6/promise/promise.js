let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function () {
        const t = Math.random();
        if (t > 0.5) {
            resolve("Success!"); // Yay! Everything went well!
        } else if(t > 0.3){
            reject("Sorry, it is fail.");
        } else{
            // throw new Error("This is an Error");//if you throw the Error, it can't be catched by .catch()
            reject(new Error("This is an Error"));
        }

    }, 2000);
});

myFirstPromise
.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage);
},
// ) 
(rejected) => { console.log("Fall! " + rejected) })//you can define a second method in then(), it is same as define it in catch().
//if you have a second method in then(), catch() will never reached. You need only one of them.
.catch((error) => {
    console.log(error);//
});

//Please see the above example on how to receive rejected message from then() or from catch().