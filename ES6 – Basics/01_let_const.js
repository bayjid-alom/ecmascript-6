// let, const & var


// Const
const name = "Bangladesh";
// const variable reassign করা যায় না
// name = "Singapore"; // Error
const countryName = "BD_" + name;
console.log(countryName);


// Let
let price = 120;
// let variable reassign করা যায়
price = 150;
console.log(price);



// Var
// var hoisting-এর কারণে declare করার আগে
// access করলে undefined পাওয়া যায়
console.log(nameIs);
var nameIs = "Jihad";


// const with Array
const dress = ["Shirt", "Pant", "Shoe"];
// পুরো array reassign করা যায় না
// dress = []; // Error
// কিন্তু array-এর ভিতরের data পরিবর্তন করা যায় (Push করে)
dress.push("Belt");
console.log(dress);




// const with Object
const student = {
    name: "John Doe",
    age: 25,
    city: "New York"
};

// পুরো object reassign করা যায় না
// student = {
//     name: "Bayjid Alom"
// }; // Error

// কিন্তু object-এর property পরিবর্তন করা যায়
student.name = "Bayjid Alom";
student.age = 19;

console.log(student.name);
console.log(student);






// let vs const vs var

/*
let:
- reassign করা যায়
- block scoped

const:
- reassign করা যায় না
- block scoped

var:
- reassign করা যায়
- একই scope-এ redeclare করা যায়
- function scoped
- hoisting-এর কারণে আগে access করলে undefined
*/

