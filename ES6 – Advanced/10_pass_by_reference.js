/**
🔗 Pass by Reference কী?
Pass by Reference বলতে বোঝায়, কোনো variable-এর মূল data/reference-এর মাধ্যমে function-এ কাজ করা, ফলে function-এর ভিতরে object বা array-এর data পরিবর্তন করলে সেই পরিবর্তন মূল object বা array-তেও দেখা যায়।

Reference-type data → Object, Array, Function → Reference value pass হয় → ভিতরের data পরিবর্তন করলে original data-তেও পরিবর্তন দেখা যায়।
**/

function firstSum(arr1, arr2) {
    arr1[0] = 100;
    arr2[0] = 200;

    const first = arr1[0]
    const second = arr2[0]
    return first + second;
}

const num1 = [5, 15, 25, 35];
const num2 = [10, 20, 30, 40];

console.log("Before the function call :", num1, num2);
// Before the function call : [ 5, 15, 25, 35 ] [ 10, 20, 30, 40 ]

const result = firstSum(num1, num2)
console.log("After the  function call :", num1, num2);
// After the  function call : [ 100, 15, 25, 35 ] [ 200, 20, 30, 40 ]
