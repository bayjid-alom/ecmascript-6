/**
 * Spread Operator (...) হলো JavaScript-এর একটি operator, যা কোনো array বা object-এর elements/properties-কে ছড়িয়ে দিতে ব্যবহার করা হয়। এটি মূলত array বা object copy, merge বা নতুন value যোগ করার সময় বেশি ব্যবহৃত হয়।
 

একটি array-কে সরাসরি অন্য variable-এ রাখলে দুইটি variable একই reference ধরে রাখে, তাই একটিতে পরিবর্তন করলে অন্যটিতেও পরিবর্তন দেখা যায়। কিন্তু Spread Operator (...) ব্যবহার করে array-এর copy তৈরি করলে নতুন আলাদা reference তৈরি হয়, তাই copy-তে পরিবর্তন করলে মূল array পরিবর্তন হয় না।
 */

const maximum = Math.max(3, 4, 5, 3, 6, 2, 20);
console.log("Maximum is :", maximum)


const numbers = [3, 5, 35, 30, 5, 10];
const maximum_2 = Math.max(numbers)
console.log(maximum_2); // NaN

const maximum_3 = Math.max(...numbers);
console.log(maximum_3);




// Another case
const params = [45, 12, 3];
function sum(x, y, z) {
    return x + y + z;
}

// const result = sum(params)
// console.log(result);
// Output: 45,12,3undefinedundefined

const result = sum(...params);
console.log("Addition three numbers :", result);





const arr_1 = [1, 2, 3, 4, 5]
const arr_2 = arr_1;
arr_2.push(6)
/*
 Note: JavaScript-এ একটি array-কে সরাসরি অন্য variable-এ assign করলে নতুন array তৈরি হয় না; উভয় variable একই array-এর reference ধরে রাখে। তাই একটিতে পরিবর্তন করলে অন্যটিতেও সেই পরিবর্তন দেখা যায়।
 */
console.log(arr_1);   // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr_2);   // [ 1, 2, 3, 4, 5, 6 ]





const arr_3 = [10, 20, 30, 40];
const arr_4 = [...arr_3, 50];
arr_4.push(60)
/*
 নোট: Spread Operator (...) ব্যবহার করলে array-এর আলাদা একটি copy তৈরি হয়। তাই copy-তে কোনো পরিবর্তন করলে মূল array পরিবর্তন হয় না।
 */
console.log(arr_3);   // [ 10, 20, 30, 40 ]
console.log(arr_4);   // [ 10, 20, 30, 40, 50, 60 ]






const person_1 = { name: "Bayjid", age: 19 }
const person_2 = person_1;
person_1.salary = 25000;
/*
 একটি object-কে সরাসরি অন্য variable-এ assign করলে উভয় variable একই reference ধরে রাখে। তাই একটি variable-এর মাধ্যমে object-এ কোনো পরিবর্তন করলে সেই পরিবর্তন অন্য variable-এর মধ্যেও দেখা যায়। অর্থাৎ, সরাসরি object assign করলে নতুন object তৈরি হয় না; একই object-এর reference শেয়ার হয়।
 */
console.log(person_1);   // { name: 'Bayjid', age: 19, salary: 25000 }
console.log(person_2);   // { name: 'Bayjid', age: 19, salary: 25000 }






const person_3 = { name: "Bayjid", age: 19 }
const person_4 = {...person_3};
person_3.salary = 25000;
/*
 নোট: Spread Operator (...) ব্যবহার করে একটি object-এর নতুন copy তৈরি করলে আলাদা reference তৈরি হয়। তাই মূল object-এ কোনো পরিবর্তন করলেও নতুন copy-তে সেই পরিবর্তন প্রভাব ফেলে না।
 */
console.log(person_3);   // { name: 'Bayjid', age: 19, salary: 25000 }
console.log(person_4);   // { name: 'Bayjid', age: 19 }


