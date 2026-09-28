let data = 4;
data = "Watermelon";
data = { price: 150 };
data = [10];
console.log(typeof data);
console.log(Array.isArray(data));



// Primitive Data types (String, Number, Boolean, Undefined, Null, BigInt, Symbol)

let name = "Bayjid";       // String
let age = 20;              // Number
let isStudent = true;      // Boolean
let address;               // Undefined
let salary = null;         // Null
let bigNumber = 123n;      // BigInt
let id = Symbol("id");     // Symbol





// Non-primitive (Object, Array, Function) 

let d = { price: 100 };
let e = [10, 20, 20];

let student = {
    name: "Bayjid",
    age: 20
};


let fruits = ["Apple", "Mango", "Banana"]; // Array




/** 
function addTwoNumbers(a, b) {
    let sum = a + b;
    console.log(sum);
}
addTwoNumbers(10, 20);   // 30
**/




// কারণ: return না থাকলে function কোনো value বাইরে পাঠায় না।
function addTwoNumbers(a, b) {
    let sum = a + b;
}

let result = addTwoNumbers(20, 20);
console.log(result); // undefined
