/**
🔽 reduce() কী?
reduce() হলো JavaScript-এর একটি array method, যা array-এর প্রতিটি element নিয়ে কাজ করে শেষ পর্যন্ত একটি single value return করে।

accumulator হলো reduce() method-এর এমন একটি parameter, যেখানে প্রতিটি iteration-এর previous result জমা থাকে। এটি ধীরে ধীরে নতুন result তৈরি করে এবং শেষ পর্যন্ত reduce()-এর final result হিসেবে ব্যবহৃত হয়।
 */


const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (const number of numbers) {
    sum = sum + number;
    console.log(sum);
}



// Short way - reduce()
// Callback function-এ দুটি প্রধান parameter যায়: accumulator এবং currentValue
const total = numbers.reduce((acc, number) => acc + number, 0);
console.log("Total Value is :", total);
// Total Value is : 15