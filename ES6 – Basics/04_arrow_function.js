// function declaration - Can be Access before initialize

console.log("Addition before initialization :", add(50, 55))
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(50, 50))




// function expression
// const varibale এ রাখা হয়েছে , তাই declaration এর আগে এক্সেস করা যাবে না।

// console.log(add2(100, 105))    // Error 
const add2 = function (num1, num2) {
    return num1 + num2;
}
console.log(add2(100, 100))




// Arrow function =>

/**
- Arrow function-এ একটি মাত্র expression থাকলে {} এবং return না লিখেও সেই expression-এর value automatically return হয়। Condition হলেও একই নিয়ম প্রযোজ্য।

একাধিক expression হলে: {} ব্যবহার করতে হয় এবং প্রয়োজনীয় value ফেরত দিতে return লিখতে হয়।
 */

const doubleIt = (x) => x * 2;
console.log("Double of 50 is :", doubleIt(50))

const addition = (num1, num2) => num1 + num2;
console.log(addition(150, 150))

const add_multiple = (a, b, c, d, e, f) => a + b + c + d + e + f;
console.log("Addition A-F :", add_multiple(10, 20, 30, 10, 20, 30));


// anonymous ()
const getPi = () => 3.1416;

const tenTimes = x => x * 10;
const isEven = (x) => x % 2 == 0;
console.log("Even Checking :", isEven(20))


// একাধিক expression হলে: {} ব্যবহার করতে হয় এবং প্রয়োজনীয় value ফেরত দিতে return লিখতে হয়।
const doMath = (x, y) => {
    const summation = x + y;
    const multiply = x * y;
    const result = multiply - summation;
    return result;
}
console.log("Result is :", doMath(20, 10));





// Use case
// document.getElementById(id).addEventListener("click", (event) => {})





