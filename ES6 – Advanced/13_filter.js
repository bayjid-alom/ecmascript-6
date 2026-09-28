/**
 filter() হলো JavaScript-এর একটি array method, যা কোনো condition অনুযায়ী array থেকে নির্দিষ্ট element বাছাই করে একটি নতুন array return করে।
**/

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);  // [ 2, 4 ]



const friends = [
    "Abdullah",
    "Shahriar",
    "Mahmudul",
    "Mamun",
    "Fahim",
    "Tanvir",
    "Sakibul"
];

const startNameWithM = friends.filter(friend => friend[0] === 'M');
console.log(startNameWithM);  // [ 'Mahmudul', 'Mamun' ]





const students = [
    { name: "Abdullah", age: 29, grade: "A+" },
    { name: "Shahriar", age: 27, grade: "A" },
    { name: "Mahmudul", age: 20, grade: "A+" },
    { name: "Tanvir", age: 22, grade: "B+" },
    { name: "Fahim", age: 24, grade: "A" }
];

const olderStudents = students.filter(student => student.age > 25 );
console.log(olderStudents);
/*
[
  { name: 'Abdullah', age: 29, grade: 'A+' },
  { name: 'Shahriar', age: 27, grade: 'A' }
]
*/



