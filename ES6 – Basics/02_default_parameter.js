function add(num1, num2) {
    const total = num1 + num2;
    console.log(num1, num2, total);
}

// add(10, 20)  // 10 20 30
// add(10)   // 10 undefined NaN




// মান দেওয়া না হলে অটোমেটিক 0 নিয়ে নিবে।
function add_two(num1, num2 = 0) {
    const total = num1 + num2;
    console.log(num1, num2, total);
}

// add_two(15)  // 15 0 15
// add_two(15, 25)  // 15 25 40





// নামের ক্ষেত্রে ডিফল্ট মান হিসেবে "" দিয়ে দিতে হবে।
function fullName(first, last = ""){
    const name = first + " " + last;
    console.log(name);
}

fullName("Bayjid", "Alom")  // Bayjid Alom
fullName("Bayjid")   // Bayjid undefined (যদি "" সেট করা না থাকে)






// এখানে, গুণের ক্ষেত্রে ০ (num2 = 0) ডিফল্ট হিসেবে দিলে সম্পূর্ণ মানটাই ০ হয়ে যাচ্ছে। তাই প্রয়োজন অনুসারে যখন যা উপযুক্ত তাই বসাতে হবে। 
// (num2 = 1 ) বসালে প্রত্যাশিত মান পাওয়া যাবে।

function multiply(num1, num2 = 1){
    const result = num1 * num2;
    console.log(result);
}

multiply(10)  // 10
multiply(5, 10)  // 50




/** Default Parameter :
 
 1. String --> ""
 2. number --> 0 [for add]
 3. number --> 1 [for multiply]
 4. array --> []
 5. object --> {}
 6. boolean --> false
 
 */