## 📝 ES6 Advanced

> This repository contains notes, examples, and practice code covering various advanced ES6 and modern JavaScript concepts. It includes topics such as primitive data types, `undefined` and `null`, truthy and falsy values, logical operators, destructuring, spread and rest operators, template literals, arrow functions, default parameters, object and array methods, and other important JavaScript concepts.


### ❓ Scope 
**Scope** {} হলো JavaScript-এ কোনো variable, function বা অন্য data কোন নির্দিষ্ট অংশ থেকে access বা ব্যবহার করা যাবে, সেই সীমা। অর্থাৎ একটি variable কোথায় available থাকবে এবং কোথা থেকে access করা যাবে না—তা Scope নির্ধারণ করে। JavaScript-এ প্রধানত Global Scope, Function Scope এবং Block Scope ব্যবহৃত হয়।

---

### ❓ Hoisting

```
Hoisting হলো JavaScript-এর এমন একটি আচরণ, যেখানে code execution শুরু হওয়ার আগে variable ও function declaration-এর জন্য memory তৈরি করা হয়। ফলে কিছু ক্ষেত্রে declaration-এর আগেই variable বা function access করা সম্ভব হয়। তবে let ও const declaration-এর আগে access করলে TDZ-এর কারণে ReferenceError হয়।
```

---

### ❓ TDZ (Temporal Dead Zone)
TDZ (Temporal Dead Zone) হলো let ও const variable declare করার পর initialize করার আগ পর্যন্ত যে সময়টুকু থাকে, সেই সময়ের মধ্যে variable-টিকে access করা যায় না। এই সময় variable scope-এর মধ্যে থাকলেও access করার চেষ্টা করলে ReferenceError হয়।

---

### ❓ Closure (Advanced) 
> Closure হলো JavaScript-এর এমন একটি feature, যেখানে একটি inner function তার outer function-এর variables-কে মনে রাখে এবং access করতে পারে, এমনকি outer function-এর execution শেষ হয়ে যাওয়ার পরেও।
[Interview...!]

<details>
<summary>Click to See Closure Example!</summary>

```js
function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3
```
এখানে counter() একবার execute হয়ে শেষ হলেও, increment() তার outer function-এর count variable-কে মনে রাখছে। এটিই Closure-এর মূল ধারণা।

</details>

---

<br>



### ❔ Callback Function কী? 
Callback function হলো এমন একটি function, যেটাকে অন্য একটি function-এর argument হিসেবে পাঠানো হয়, এবং সেই function পরে প্রয়োজন অনুযায়ী তাকে call করে।
> একটা function → অন্য function-এর parameter হিসেবে পাঠানো → Callback Function

<details>
<summary>Click to See Callback Function Example!</summary>

```js
function sayHello() {
    console.log("Hello!");
}

function callFunction(callback) {
    callback();
}

callFunction(sayHello);
```

<details>
<summary>🗝️ Click to See this Code Explain</summary>

```
এই code-এ sayHello() একটি সাধারণ function, যেখানে "Hello!" print করা হয়েছে। এরপর callFunction(callback) নামে আরেকটি function তৈরি করা হয়েছে, যার callback parameter-এর মাধ্যমে অন্য একটি function গ্রহণ করা যায়। callFunction(sayHello) করার সময় sayHello function-টিকে callFunction-এর parameter হিসেবে pass করা হয়েছে। ফলে callback-এর জায়গায় sayHello চলে আসে এবং callback() লিখে সেই function-টিকে call করা হয়। তাই শেষে output হিসেবে Hello! পাওয়া যায়। sayHello এখানে Callback Function, কারণ এটি অন্য একটি function-এর parameter হিসেবে pass করা হয়েছে।
```

</details>

</details>

---





### ❔ **Pass by Value** কী?
**Pass by Value** হলো JavaScript-এ কোনো variable-এর value-এর একটি copy function-এর parameter হিসেবে পাঠানোর পদ্ধতি। Function-এর ভিতরে parameter-এর value পরিবর্তন করলেও মূল variable-এর value পরিবর্তন হয় না, কারণ function মূল value-এর পরিবর্তে তার copy নিয়ে কাজ করে।

```
Pass by Value = মূল variable না পাঠিয়ে তার value-এর copy পাঠানো।
Primitive data → Pass by Value → Original value সাধারণত পরিবর্তন হয় না।
```

**💡 Pass by Value Example**

```js
let number = 10;

function changeValue(value) {
    value = 20;
}

changeValue(number);

console.log(number);

Output : 10
```

<details>
<summary>Click to See Pass by Value code Explain!</summary>

```
এখানে number variable-এর value 10 এবং changeValue(number) করার সময় number-এর value-এর একটি copy value parameter-এর মধ্যে pass হয়। 

তাই function-এর ভিতরে value = 20 করার ফলে শুধু value পরিবর্তন হয়, মূল number variable-এর value পরিবর্তন হয় না। এজন্য শেষে number এর output 10 থাকে। এটিই Pass by Value—অর্থাৎ মূল variable-এর value-এর একটি copy function-এর parameter হিসেবে pass করা।
```

</details><br>

---










### ❔ **Pass by Reference** কী?

**Pass by Reference** বলতে বোঝায়, কোনো Object বা Array-এর reference function-এর parameter হিসেবে pass করা, যার ফলে function-এর ভিতরে সেই Object বা Array-এর data পরিবর্তন করলে মূল Object বা Array-এর data-ও পরিবর্তন হয়ে যায়।

- Pass by Reference = মূল Object বা Array-এর reference-এর মাধ্যমে একই data নিয়ে কাজ করা।
- Reference-type data → Object, Array, Function → Reference value pass হয় → ভিতরের data পরিবর্তন করলে original data-তেও পরিবর্তন দেখা যায়।


**💡 Pass by Reference Example**

```js
let person = {
    name: "Tomal",
    age: 20
};

function changeName(user) {
    user.name = "Pori";
}

changeName(person);
console.log(person.name);

Output : Pori
```

<details> 
<summary>Click to See Pass by Reference code Explain!</summary>

```
এখানে person একটি Object এবং এর name property-এর value "Tomal"। changeName(person) করার সময় person Object-এর reference user parameter-এর মধ্যে pass হয়।

তাই function-এর ভিতরে user.name = "Pori" করার ফলে মূল person Object-এর name property-ও পরিবর্তন হয়ে যায়। এজন্য শেষে person.name এর output "Pori" পাওয়া যায়। 

এটিই Pass by Reference—অর্থাৎ Object বা Array-এর reference-এর মাধ্যমে একই data নিয়ে কাজ করা, যার ফলে function-এর ভিতরে পরিবর্তন করলে মূল data-তেও সেই পরিবর্তন দেখা যায়।
```

</details>

একটা ছোট technical note: JavaScript technically Pass by Reference নয়; Object-এর reference value-ও Pass by Value হিসেবে pass হয়। তবে beginner level-এ এই behavior বোঝাতে সাধারণত Pass by Reference বলা হয়।

--- 
<br>





### ❔ **Arguments** কী?

**JavaScript-এ Arguments হলো function call করার সময় function-এর মধ্যে পাঠানো actual values।** অর্থাৎ, function-কে call করার সময় যে value বা data পাঠানো হয়, সেগুলোকে **Arguments** বলা হয়।

> Arguments = Function call করার সময় পাঠানো actual values।

<details> <summary>Click to see Arguments Example </summary>

```js
function add(num1, num2) {
    console.log("Arguments :", arguments, arguments[2]);

    // Convert arguments into an actual array
    const args = [...arguments];
    console.log("Args :", args);

    return num1 + num2;
}

add(2, 5, 20, 40, 60);

Output:

// Array-like object
Arguments : [Arguments] { '0': 2, '1': 5, '2': 20, '3': 40, '4': 60 } 20

// Actual array
Args : [ 2, 5, 20, 40, 60 ]
```


<details> 
<summary>Click to See Arguments code Explain!</summary>

```
এখানে add(num1, num2) function-এ num1 এবং num2 হলো parameters। কিন্তু function call করার সময় add(2, 5, 20, 40, 60) মোট পাঁচটি value পাঠানো হয়েছে।

এই পাঠানো value-গুলো function-এর built-in arguments object-এর মধ্যে পাওয়া যায়। arguments দেখতে অনেকটা array-এর মতো হলেও এটি একটি Array-like Object,

তাই এতে index ব্যবহার করে value access করা যায়, যেমন arguments[2] এর মাধ্যমে 20 পাওয়া যায়। এরপর [...arguments] ব্যবহার করে arguments-কে একটি actual Array-তে convert করা হয়েছে এবং args variable-এর মধ্যে রাখা হয়েছে।
```

</details>

</details>












---

<br>

### 🧩 Primitive and Non-Primitive Data Types

| Primitive | Example | Non-Primitive | Example |
|---|---|---|---|
| `String` | `"Bayjid"` | `Object` | `{ name: "Bayjid" }` |
| `Number` | `25` | `Array` | `["HTML", "CSS"]` |
| `Boolean` | `true` | `Function` | `function() {}` |
| `Undefined` | `undefined` | — | — |
| `Null` | `null` | — | — |
| `BigInt` | `123n` | — | — |
| `Symbol` | `Symbol("id")` | — | — |


---



### 🔄 Truthy and Falsy Values

| Falsy Value | Example | Truthy Value | Example |
|---|---|---|---|
| `false` | `false` | `true` | `true` |
| `0` | `0` | Non-zero number | `1`, `-5` |
| `-0` | `-0` | String | `"hello"` |
| `0n` | `0n` | Non-empty string | `"0"` |
| `""` | `""` | Array | `[]` |
| `null` | `null` | Object | `{}` |
| `undefined` | `undefined` | Function | `function() {}` |
| `NaN` | `NaN` | Other values | `Symbol()`, `123n` |


---



### ⚖️ Equal (`==`) and Strict Equal (`===`)

| Operator | Comparison Type | Description |
|---|---|---|
| `==` | Loose Equality | Compares values after type conversion |
| `===` | Strict Equality | Compares both value and data type |

```js
let a = 10;
let b = "10";

console.log(a == b);  // true
console.log(a === b); // false
```













### 📌 `map()` vs `forEach()`

| বিষয় | `map()` | `forEach()` |
|---|---|---|
| প্রতিটি element-এর উপর কাজ করে | ✅ | ✅ |
| নতুন array return করে | ✅ | ❌ |
| মূল ব্যবহার | Data transform করা | কোনো কাজ execute করা |
| Return value | নতুন array | `undefined` |

**`map()` কী?**  
`map()` হলো একটি array method, যা প্রতিটি element-এর উপর কাজ করে এবং সেই কাজের ফলাফল দিয়ে একটি **নতুন array return করে**।

**`forEach()` কী?**  
`forEach()` হলো একটি array method, যা প্রতিটি element-এর উপর একটি কাজ **execute করে**, কিন্তু কোনো নতুন array return করে না।

> `map()` → কাজ করে + নতুন array দেয়.

> `forEach()` → কাজ করে + নতুন array দেয় না.




--- 
<br>





### 🔎 `find()` কী?

`find()` হলো JavaScript-এর একটি **array method**, যা একটি condition অনুযায়ী array-এর **প্রথম matching element** return করে। কোনো element match না করলে `undefined` return করে।

```js
const numbers = [10, 15, 20, 25, 30];

const result = numbers.find(num => num > 20);

console.log(result);
// 25
```



---



### 🔍 filter() কী?

filter() হলো JavaScript-এর একটি array method, যা একটি condition অনুযায়ী সব matching element বাছাই করে একটি নতুন array return করে। কোনো element match না করলে empty array [] return করে।

```js
const numbers = [10, 15, 20, 25, 30];

const result = numbers.filter(num => num > 20);

console.log(result);
// [25, 30]
```










<br>

## 📝 Notes (ES6 - Advanced)

<details>
<summary>📌 Null vs Undefined</summary>

### Null vs Undefined

`undefined` হলো এমন একটি value যা সাধারণত তখন পাওয়া যায়, যখন কোনো variable declare করা হয়েছে কিন্তু এখনো কোনো value assign করা হয়নি। JavaScript নিজে থেকেই সেই variable-এর value `undefined` হিসেবে রাখে। অন্যদিকে, `null` ব্যবহার করা হয় যখন আমরা ইচ্ছা করে বোঝাতে চাই যে variable-এর বর্তমানে কোনো value নেই।

সহজভাবে বলা যায়, `undefined` মানে হলো **value এখনো দেওয়া হয়নি**, আর `null` মানে হলো **ইচ্ছা করে কোনো value রাখা হয়নি**। তাই `undefined` সাধারণত JavaScript-এর default অবস্থাকে বোঝায়, আর `null` developer নিজে assign করে।

```js
let name;
console.log(name); // undefined

let user = null;
console.log(user); // null
```

</details> <br>

















<details>

<summary>📌 ! and !! Operator</summary>

### ! and !! Operator

JavaScript-এ `!` হলো **Logical NOT operator**। এটি কোনো value-এর truthy বা falsy অবস্থাকে উল্টে দেয়। কোনো value truthy হলে `!` সেটিকে `false` করে এবং কোনো value falsy হলে `true` করে।

অন্যদিকে, `!!` হলো **Double NOT operator**। এখানে প্রথম `!` value-এর truthy/falsy অবস্থাকে উল্টে দেয় এবং দ্বিতীয় `!` আবার সেটিকে উল্টে দেয়। ফলে শেষ পর্যন্ত value-টির Boolean result অর্থাৎ `true` অথবা `false` পাওয়া যায়।

```js
// ! Operator

let name = "bayjid";
console.log(!name); // false
এখানে "bayjid" একটি truthy value। তাই !name সেটিকে উল্টে false করেছে।
```


```js
// !! Operator

let name = "bayjid";
console.log(!!name); // true
এখানে প্রথম ! "bayjid"-কে false করে এবং দ্বিতীয় ! আবার true করে।

"bayjid" → Truthy
!name    → false
!!name   → true

```

আরেকটি example:

```js
let age = 0;
console.log(!age);  // true
console.log(!!age); // false

এখানে 0 একটি falsy value। তাই !age এর result true এবং !!age এর result false।
```

সহজভাবে মনে রাখার জন্য:

- 🔹 !value → Truthy/Falsy অবস্থাকে উল্টায়।
- 🔹 !!value → Value-কে true অথবা false-এ convert করে।
- 🔹 প্রথম ! → একবার উল্টায়।
- 🔹 দ্বিতীয় ! → আবার উল্টায়।

</details> <br>

















<details>

<summary>📌 Hoisting</summary>

### Hoisting

JavaScript-এ **Hoisting** হলো এমন একটি behavior যেখানে code execution শুরু হওয়ার আগে JavaScript variable এবং function declaration-গুলোকে তাদের respective scope-এর মধ্যে **register করে রাখে**। এর ফলে declaration code-এ পরে থাকলেও কিছু ক্ষেত্রে সেটিকে আগে access বা call করা সম্ভব হয়।

`var` দিয়ে declare করা variable hoist হয় এবং declaration-এর আগে access করলে `undefined` পাওয়া যায়।

```js
console.log(name); // undefined
var name = "Bayjid";

এখানে JavaScript-এর কাছে বিষয়টি conceptually এমন:

var name;
console.log(name); // undefined
name = "Bayjid";
```

অন্যদিকে, let এবং const-ও hoist হয়, কিন্তু declaration-এর আগে access করা যায় না। Declaration-এর আগের এই অংশকে Temporal Dead Zone (TDZ) বলা হয়।

```js
console.log(name); // ReferenceError
let name = "Bayjid";
```


```js
Function declaration সম্পূর্ণভাবে hoist হওয়ায় declaration-এর আগেও function call করা যায়।

sayHello();

function sayHello() {
    console.log("Hello!");
}

এখানে sayHello() আগে call করা হলেও JavaScript function declaration-টি আগে থেকেই register করে রাখে।
```

সহজভাবে মনে রাখার জন্য:

- 🔹 Hoisting → Execution-এর আগে declaration register করার JavaScript behavior।
- 🔹 var → Hoist হয় এবং আগে access করলে undefined পাওয়া যায়।
- 🔹 let / const → Hoist হয়, কিন্তু declaration-এর আগে access করা যায় না।
- 🔹 Function declaration → Declaration-এর আগেও call করা যায়।
- 🔹 TDZ → let ও const declaration-এর আগের access নিষিদ্ধ সময়।


</details> <br>















<details>

<summary>📌 reduce() Method</summary>

### reduce() Method

JavaScript-এ `reduce()` হলো একটি **array method**, যা array-এর প্রতিটি element-এর উপর কাজ করে এবং সবশেষে একটি **single value** return করে। এটি সাধারণত কোনো array-এর total, sum, multiplication, counting বা অন্য কোনো accumulated result তৈরি করতে ব্যবহার করা হয়।

`reduce()`-এর callback function-এ সাধারণত দুটি প্রধান parameter ব্যবহার করা হয়: **accumulator** এবং **currentValue**। `accumulator` প্রতিটি iteration-এর আগের result জমা রাখে এবং `currentValue` হলো বর্তমান array element। দ্বিতীয় argument হিসেবে দেওয়া `initialValue` থেকে accumulator-এর কাজ শুরু হয়।

```js
// reduce() Method

const numbers = [5, 10, 15];
const total = numbers.reduce((acc, number) => acc + number, 0);
console.log("Total Value is :", total);

// Total Value is : 30
```

এখানে acc হলো accumulator, যা প্রতিটি iteration-এর result জমা রাখছে এবং number হলো currentValue, অর্থাৎ বর্তমান element।

</details>  <br>
















<details>
<summary>📌 Increment Operator</summary>

### ➕ Increment Operator

JavaScript-এ **Increment** বলতে কোনো variable-এর value **বাড়ানোকে** বোঝায়। সাধারণত কোনো value **১ করে বাড়ানোকে increment** বলা হয়। JavaScript-এ increment করার জন্য `++` operator ব্যবহার করা হয়।

```js
// Increment Operator
let count = 5;
count++;
console.log(count);
// 6
```

`এখানে count++ count-এর value ১ বাড়িয়ে 6 করেছে।`

`Increment করার জন্য count = count + 1, count += 1 এবং count++ ব্যবহার করা যায়।`

</details> <br>

---










<details>
<summary>❔ JavaScript Core Concepts — Interview Questions </summary>


## ❔ Basic JavaScript

### 1. What is JavaScript?

### 2. What are the primitive data types in JavaScript?

### 3. What is the difference between primitive and non-primitive data types?

### 4. What is the difference between `let`, `const`, and `var`?

### 5. What is the difference between `==` and `===`?

### 6. What is Type Coercion in JavaScript?

### 7. What are Truthy and Falsy values?

### 8. What is the difference between `null` and `undefined`?

### 9. What is `NaN`?

### 10. What is the difference between `typeof` and `instanceof`?

---

## ❔ Scope, Hoisting & Functions

### 11. What is Scope in JavaScript?

### 12. What are Global Scope, Function Scope, and Block Scope?

### 13. What is Hoisting?

### 14. What is the Temporal Dead Zone (TDZ)?

### 15. Why can a function declaration be called before it is defined?

### 16. What is the difference between a Function Declaration and Function Expression?

### 17. What is an Arrow Function?

### 18. How is an Arrow Function different from a Regular Function?

### 19. What is a Callback Function?

### 20. What is a Closure?

---


## ❔ Arrays & Objects

### 21. What is the difference between an Array and an Object?

### 22. What is the difference between `map()` and `forEach()`?

### 23. What does `filter()` return?

### 24. What does `find()` return?

### 25. What is the purpose of `reduce()`?

### 26. What is the difference between `find()` and `filter()`?

### 27. What is the Spread Operator (`...`)?

### 28. What is the Rest Operator (`...`)?

### 29. What is Destructuring?

### 30. What is the difference between `Object.keys()`, `Object.values()`, and `Object.entries()`?

---

## ❔ ES6 & Modern JavaScript

### 31. What is ES6?

### 32. What are some major features introduced in ES6?

### 33. What are Template Literals?

### 34. What are Default Parameters?

### 35. What is Optional Chaining (`?.`)?

### 36. What is the Nullish Coalescing Operator (`??`)?

### 37. What is the difference between `||` and `??`?

### 38. What are JavaScript Modules?

### 39. What is the difference between `import` and `export`?

### 40. What is the difference between Spread and Rest operators?


</details>


<br>

## 👨‍💻 Author

**Bayjid Alom**

> Learning JavaScript and building a strong foundation in modern web development.

---
---
