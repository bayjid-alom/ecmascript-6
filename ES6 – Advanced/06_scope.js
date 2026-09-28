/****
 Scope  {}
  JavaScript-এ Scope বলতে বোঝায়—কোন জায়গা থেকে একটি variable বা function access করা যাবে, আর কোন জায়গা থেকে যাবে না।

ES6-এর পর Scope বোঝার ক্ষেত্রে সবচেয়ে গুরুত্বপূর্ণ হলো Block Scope।
Scope-এর মূল ধরন:

> Global Scope → পুরো JavaScript code থেকে access করা যায়।
> Function Scope → শুধু নির্দিষ্ট function-এর ভিতর access করা যায়।
> Block Scope → { } block-এর ভিতরে সীমাবদ্ধ থাকে।

ES6-এ let এবং const block-scoped, অর্থাৎ { } এর ভিতরে declare করলে সেই block-এর বাইরে access করা যায় না।
****/







let pi = 3.1416;

// Function declaration is hoisted, so it can be called before its declaration
console.log(add(20, 10))

function add(a, b) {
    const factor = 0.5;
    const result = (a + b) * factor;
    const total = doubleIt(result)

    const value = addFive(total)

    function addFive(num) {
        num = num + pi;
        return num + 5;
    }
    return value;
}

function doubleIt(num) {
    return num * 2;
}











const multiply = (a, b) => {
    // console.log(result);  // ReferenceError
    // Short note: let ও const hoist হয়, কিন্তু initialization-এর আগে access করলে ReferenceError হয়—এই সময়টিই TDZ।
    const result = a * b;
    return result;
}

multiply(5, 10)
