/***
 Optional Chaining (?.) হলো JavaScript-এর এমন একটি feature, যার মাধ্যমে কোনো property বা nested property access করার সময় মাঝখানে কোনো value null বা undefined হলে error না দিয়ে সরাসরি undefined return করা যায়। অর্থাৎ, কোনো property না থাকলেও program crash না করে safely সেই value check করা যায়।
***/

const employee = {
    name: "John Doe",
    age: 35,
    position: "Manager",
    family: {
        father: "Richard Doe",
        mother: {
            name: 'Jane Doe',
            age: 55,
        }
    },
    'home-address': '123 BM9',
    department: "HR",
    salary: 50000,

};


// console.log(employee.family.grandfather.age);   // Error

// using optional chaining (?.)
console.log(employee.family?.grandfather?.age);   // Error


