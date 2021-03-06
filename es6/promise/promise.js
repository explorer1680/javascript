let myFirstPromise = new Promise((res, rej) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something like XHR or an HTML5 API.
    sleep(1000);
    // throw new Error('An error not inside of async function');// If you want to use catch() to catch new Error(), you have to put it outside of the async code.
    // Put inside of async code will not work
    // https://stackoverflow.com/questions/33651306/why-doesnt-promise-catch-error-thrown-by-async-operation
    setTimeout(function () {//setTimeout is asyn function. the 'new Promise(...) is return immediately. 'function()' passed to setTimeout will be sent to Message Queue.
        const t = Math.random();
        if (t > 0.9) {
            res("Success!"); // Yay! Everything went well!
        } else if(t > 0.8){
            rej("Sorry, it is fail.");
        } else{
            // throw new Error("This is an Error");//if you throw the Error, it can't be catched by .catch(), because this code is inside of async code. see the link above.
            // throw new Error("This is an Error");
            rej(new Error("This is an Error"));
        }

    }, 2000);
});

//Note 1:
// sleep(5000);
// console.log('times passed from myFirstPromise was defined and myFristPromise is used');
//here is show that the method sent to new Promise() is executed immediately

myFirstPromise
.then((successMessage) => {//then() is async function, '(successMessge) => ...' function will be sent to Message Queue.
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    sleep(5000);
    console.log("Yay! " + successMessage);
}
// ) 
// ,(rejected) => { console.log("Fall! " + rejected) }//you can define a second method in then(), it is same as define it in catch().
//if you have a second method in then(), catch() will never reached. You need only one of them.
)
.catch((error) => {
    console.log('Hi');
    console.log('throw an error: ' + error);//when you don't have second function in then(), error comes here.
    //it can catch reject, thrown error, and other code errors, but, it can't catch error thrown from async code.
});

//Please see the above example on how to receive rejected message from then() or from catch().

//comment out Note 1, this line print firstly
console.log('finished');

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e10; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }