/***
 Dot Notation (.) হলো Object-এর property-কে dot চিহ্নের মাধ্যমে সরাসরি access করার পদ্ধতি। এতে Object-এর নামের পরে . দিয়ে property name লিখতে হয়।

Bracket Notation ([]) হলো Object-এর property-কে square bracket-এর মাধ্যমে access করার পদ্ধতি। এতে property name সাধারণত quotation-এর মধ্যে লেখা হয় এবং property name-এ hyphen, space বা special character থাকলেও access করা যায়।

***/


const employee = {
    name: "John Doe",
    age: 35,
    position: "Manager",
    'home-address': '123 BM9',
    department: "HR",
    salary: 50000
};

// dot notation
// console.log(employee.name);
// console.log(employee.home-address);    // Error
// console.log(employee.salary);


// bracket notation
console.log(employee['position']);
console.log(employee['home-address']);
console.log(employee[2]);  // undefined


const money = employee ['salary'];

const key = 'position';
console.log(employee[key]);
