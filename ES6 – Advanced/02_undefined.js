// Varibale declared but value is not assigned - undefined
let data;
console.log(data);   // undefined


const sum = (a, b) => {
    console.log(a, b);
}
sum()   // undefined undefined
sum(5)  // 5 undefined



const student = {
    name: "Bayjid Alom",
    age: 18,
    marks: 85,
    salary: null,
}

console.log(student.marks);   // 85

delete student.name;
console.log(student.name);   // undefined




const arr = [1, 2, 3, 4, 5];
// console.log(arr[10]);  // undefined

delete arr[0];
console.log(arr);   // [ <1 empty item>, 2, 3, 4, 5 ]
console.log(arr[0]);   // undefined






// Variable intentionally set to no value - null 
console.log(typeof undefined);  // undefined
console.log(typeof null);  // object



