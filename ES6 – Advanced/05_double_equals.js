/*
== (Loose Equality) → প্রয়োজন হলে type conversion করে value compare করে।
=== (Strict Equality) → type conversion ছাড়া value ও data type দুটোই compare করে।
*/

console.log(2 == 2)    // true
console.log(2 == '2');  // true
console.log(1 == true);  // true

console.log(0 == false);  // true
console.log(true == '1');  // true
console.log(false == '0');  // true
console.log(null == undefined);  // true

console.log(NaN == NaN);  // false
console.log([5] == "5");  // true
console.log({} == {}); // false
console.log([] == []);  // false

console.log([5].toString());  // 5




/*
`==` হলো Loose Equality Operator।
এটি comparison করার সময় প্রয়োজন হলে type coercion করে।
অর্থাৎ, value compare করার আগে JavaScript একটি value-এর
data type automatically পরিবর্তন করতে পারে।

উদাহরণ:
10 এবং "10" এর data type ভিন্ন হলেও
10 == "10" এর ফলাফল true।
*/



/*
`===` হলো Strict Equality Operator।
এটি কোনো type coercion করে না। অর্থাৎ, comparison করার সময়
JavaScript value-এর data type automatically পরিবর্তন করে না।
এটি value এবং data type—দুটোই strictly compare করে।

উদাহরণ:
10 এবং "10" দেখতে একই হলেও তাদের data type ভিন্ন।
তাই 10 === "10" এর ফলাফল false।
*/