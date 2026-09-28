/**
🔎 find() কী?
find() হলো JavaScript-এর একটি array method, যা condition অনুযায়ী প্রথম matching element-টি return করে।
**/

const students = [
    { name: "Abdullah", age: 29, grade: "A+" },
    { name: "Shahriar", age: 27, grade: "A" },
    { name: "Mahmudul", age: 20, grade: "A+" },
    { name: "Tanvir", age: 22, grade: "B+" },
    { name: "Fahim", age: 24, grade: "A" },
    { name: "Ahad", age: 24, grade: "A" }
];

const student = students.find(student=> student.name === "Mahmudul")
console.log(student);
// { name: 'Mahmudul', age: 20, grade: 'A+' }


const definiteName = students.find(student=> student.name[0] === "A");
console.log(definiteName);
//  { name: 'Abdullah', age: 29, grade: 'A+' }