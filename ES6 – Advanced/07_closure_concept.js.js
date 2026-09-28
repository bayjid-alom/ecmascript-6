/**
 JavaScript Closure কী?

Closure হলো JavaScript-এর এমন একটি feature, যেখানে একটি inner function তার outer function-এর variables-কে মনে রাখে এবং access করতে পারে, এমনকি outer function-এর execution শেষ হয়ে যাওয়ার পরেও।
 */


function outerFunction() {
    function innerFunction() {
        console.log("This is the inner function.");
    }
    return innerFunction;
}

const result = outerFunction()
// result()  
// // This is the inner function.

// console.log("In the outside", result);  
// In the outside [Function: innerFunction]








function counter(owner) {
    let count = 0;
    function increment() {
        count++;
        console.log("Value of counter :", owner, count);
    }
    return increment;
}

// const count1 = counter();
// count1()
// count1()
// count1()

const rahimCounter = counter("Rahim")
rahimCounter()
rahimCounter()
rahimCounter()


const karimCounter = counter("Karim")
karimCounter()
karimCounter()
karimCounter()

rahimCounter()
rahimCounter()

karimCounter()
karimCounter()


/***
 Value of counter : Rahim 1
Value of counter : Rahim 2
Value of counter : Rahim 3

Value of counter : Karim 1
Value of counter : Karim 2
Value of counter : Karim 3

Value of counter : Rahim 4
Value of counter : Rahim 5

Value of counter : Karim 4
Value of counter : Karim 5

 */



