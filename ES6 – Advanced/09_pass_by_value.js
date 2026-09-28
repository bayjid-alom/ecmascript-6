/***
Pass by Value কী?
Pass by Value হলো JavaScript-এ কোনো variable-এর value-এর একটি copy function-এর parameter হিসেবে পাঠানোর পদ্ধতি। Function-এর ভিতরে parameter-এর value পরিবর্তন করলেও মূল variable-এর value পরিবর্তন হয় না, কারণ function মূল value-এর পরিবর্তে তার copy নিয়ে কাজ করে।

Pass by Value = মূল variable না পাঠিয়ে তার value-এর copy পাঠানো।

Primitive data → Pass by Value → Original value সাধারণত পরিবর্তন হয় না।
***/


function multiply(a, b) {
    a = a - 5;
    b = b - 5;
    console.log(a, b);
    return a * b;
}

let x = 10;
let y = 20;
console.log("Before calling", x, y);
const result = multiply(x, y)
console.log(result);


console.log("After calling", x, y);