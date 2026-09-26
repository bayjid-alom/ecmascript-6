/***
ES6 Destructuring :

Destructuring হলো JavaScript ES6-এর একটি feature, যার মাধ্যমে কোনো object বা array-এর ভেতরের data সরাসরি আলাদা variable-এ নেওয়া যায়। Object destructuring-এ সাধারণত object-এর property name-কে variable হিসেবে ব্যবহার করে তার value নেওয়া হয়। এতে বারবার object.property লিখতে হয় না। Array destructuring-এ আবার position/index অনুযায়ী value variable-এ রাখা হয়।

সহজভাবে: Object/Array থেকে প্রয়োজনীয় value বের করে সরাসরি variable-এ রাখার পদ্ধতিই Destructuring।
***/



/*****
const product = {
    name : "iPhone",
    price : 100000,
    description : "A smartphone by Apple"
};

const newPrice = product.price + 10000;
const phoneName = `this is ${product.name}`;

// Object Destructuring হলো object-এর property থেকে value সরাসরি variable-এ নেওয়ার একটি পদ্ধতি। এর মাধ্যমে বারবার product.name বা product.price না লিখে property-এর value সহজেই ব্যবহার করা যায়।

const price = product.price;
const name = product.name;

*****/







// Object destructuring-এ property name-কে variable name হিসেবে ব্যবহার করে object থেকে value নেওয়া হয়।

const product = {name: 'iPhone', price : 799, brand: 'Apple'};
const { name, price: phonePrice, camera } = { name: 'iPhone', price: 799, brand: 'Apple' };
console.log(name, phonePrice, camera);





const student = {
    name: "Rahim",
    age: 20,
    city: "Dhaka",
    course: "CST"
};

const { course, ...more } = student;
console.log(more);    // { name: 'Rahim', age: 20, city: 'Dhaka' }




// Array destructuring-এ property name দিতে হয় না। এখানে index/position অনুযায়ী variable name দিতে হয়।
const [first, second] = [10, 20, 30, 40, 50];
console.log(first, second);




const height = [5, 6, 7, 8, 9];
const [first_height, second_height, ...rest] = height;
console.log(rest);    // [7, 8, 9]
console.log(first_height, second_height);    // 5 6



const students = ["Rahim", "Karim", "Hasan", "Sakib", "Nabil"];
const [student1, student2, ...restNames] = students;
const remainingStudents = restNames;
console.log(remainingStudents);    // ["Hasan", "Sakib", "Nabil"]




const familyMembersName = ["Babul", "Anjuara", "Bayjid", "Najmin", "Ashamoni", "Jubaeid"];
const [memberOne, memberTwo, third, ...otherMembers] = familyMembersName;
console.log(memberOne, memberTwo, third);     // Babul Anjuara Bayjid
console.log(otherMembers);     // [ 'Najmin', 'Ashamoni', 'Jubaeid' ]


