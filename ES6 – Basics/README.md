## 📝 ECMAScript 6 (ES6)


### ❓ About ECMAScript

**ECMAScript** হলো একটি scripting language specification বা standard, যা JavaScript-এর language features এবং rules নির্ধারণ করে।

সহজভাবে বললে, **JavaScript হলো একটি programming language, আর ECMAScript হলো সেই language-এর standard/specification।**

JavaScript-এর বিভিন্ন version বা feature development এই ECMAScript standard অনুসরণ করে।

উদাহরণ:

| Version | Year | Description |
|---|---:|---|
| **ES1** | 1997 | First ECMAScript edition |
| **ES2** | 1998 | Minor specification updates |
| **ES3** | 1999 | Added important language features |
| **ES4** | — | Planned but never finalized |
| **ES5** | 2009 | Major language improvements |
| **ES5.1** | 2011 | Minor revision of ES5 |
| **ES6** | 2015 | Introduced many modern JavaScript features |

বর্তমানে JavaScript-এর modern features ECMAScript standard-এর মাধ্যমে নিয়মিত update করা হয়।

---

## 📜 JavaScript & ECMAScript History

JavaScript 1995 সালে **Brendan Eich** তৈরি করেন। তখন JavaScript-এর মূল উদ্দেশ্য ছিল web pages-কে আরও dynamic এবং interactive করা।

পরবর্তীতে JavaScript-এর জন্য একটি standard তৈরি করার প্রয়োজন হয়। সেই standard-এর নাম দেওয়া হয় **ECMAScript**।

<br>

---








<details>
<summary>📜 JavaScript & ECMAScript — Detailed Evolution</summary>

### 1995 — JavaScript

Brendan Eich Netscape-এ কাজ করার সময় JavaScript তৈরি করেন।

এর মূল উদ্দেশ্য ছিল browser-এর web pages-এ dynamic এবং interactive behaviour যোগ করা।

### 1997 — ECMAScript

JavaScript-এর standardization-এর জন্য প্রথম ECMAScript specification প্রকাশিত হয়।

### 1999 — ES3

ECMAScript 3 প্রকাশিত হয় এবং JavaScript-এর development-এ গুরুত্বপূর্ণ ভূমিকা রাখে।

### 2009 — ES5

ECMAScript 5 প্রকাশিত হয়।

এতে JavaScript-এর অনেক improvements এবং useful features যোগ করা হয়।

### 2015 — ES6

**ECMAScript 6**, যার official name **ECMAScript 2015**, প্রকাশিত হয়।

এটি JavaScript-এর একটি major update ছিল।

ES6-এ অনেক modern features যোগ করা হয়, যেমন:

- `let`
- `const`
- Arrow Function
- Template Literal
- Destructuring
- Spread Operator
- Rest Parameter
- Class
- Promise
- Modules
- `for...of`

### 2016 — ES7

ECMAScript 2016 প্রকাশিত হয়।

এরপর থেকে ECMAScript-এর নতুন version নিয়মিতভাবে প্রকাশিত হতে থাকে।

### 2017 — ES8

ECMAScript 2017 প্রকাশিত হয় এবং JavaScript-এ আরও নতুন features যোগ হয়।

### এরপর

2015 সালের পর থেকে ECMAScript-এর নতুন specification নিয়মিতভাবে প্রকাশ করা হচ্ছে।

</details>

---









## 🚀 What is ES6?

**ES6 (ECMAScript 2015)** হলো ECMAScript-এর একটি major version, যা 2015 সালে প্রকাশিত হয়।
ES6 JavaScript-এর syntax আরও clean, readable এবং powerful করে। Modern JavaScript শেখার জন্য ES6-এর concepts খুবই গুরুত্বপূর্ণ।

---





## 📌 Major ES6 Features

<details>
<summary>📦 let & const</summary>

ES6-এ `let` এবং `const` introduce করা হয়।

```
let price = 100;

price = 150;

```
</details>

<br><br>

















## 📝 Notes ( ES6 Core — Details )

<details>

<summary>🔍 let, var & const — Key Differences</summary>

### 📝 Overview

JavaScript-এ variable declare করার জন্য `var`, `let` এবং `const` ব্যবহার করা হয়। তিনটিই variable তৈরি করতে পারে, কিন্তু তাদের **reassignment, redeclaration, scope এবং hoisting**-এর behaviour আলাদা। Modern JavaScript-এ সাধারণত `let` এবং `const` বেশি ব্যবহার করা হয়, কারণ এগুলো **block scope** follow করে এবং code আরও predictable রাখতে সাহায্য করে। `var` হলো JavaScript-এর পুরোনো variable declaration system এবং এর scope ও hoisting behaviour কিছুটা আলাদা।


### 🔹 let

`let` ES6-এ introduce করা হয়। এটি **block scoped**, অর্থাৎ `{}` block-এর মধ্যে সীমাবদ্ধ থাকে। `let` variable-এর value পরে **reassign করা যায়**, কিন্তু একই scope-এ **redeclare করা যায় না**।

### 🔹 const

`const`-ও ES6-এ introduce করা হয়। এটি **block scoped** এবং variable-কে পরে নতুন value দিয়ে **reassign করা যায় না**। `const` declare করার সময় অবশ্যই একটি value দিতে হয়। তবে `const` দিয়ে রাখা Array বা Object-এর ভিতরের data পরিবর্তন করা যায়।

### 🔹 var

`var` JavaScript-এর পুরোনো variable declaration keyword। এটি **function scoped**, অর্থাৎ যে function-এর মধ্যে declare করা হয়, সেই function-এর মধ্যে accessible থাকে। `var` variable-এর value পরে **reassign করা যায়** এবং একই scope-এ **redeclare করাও যায়**। `var` declaration **hoisted** হয় এবং declaration-এর আগে access করলে `undefined` পাওয়া যায়। <br>


### 📦 Block Scope

**Block Scope** মানে হলো কোনো variable যদি `{ }` curly braces-এর একটি block-এর ভিতরে declare করা হয়, তাহলে সেই variable শুধু ওই block-এর ভিতরেই ব্যবহার করা যায়। Block-এর বাইরে থেকে সেটিকে access করা যায় না। JavaScript-এ `let` এবং `const` **block scoped**, কিন্তু `var` **block scoped নয়**; `var` হলো **function scoped**। সহজভাবে মনে রাখার জন্য বলা যায়, `let` ও `const` `{ }`-এর সীমানা মেনে চলে, কিন্তু `var` শুধু function-এর সীমানা মেনে চলে। <br>


### 📊 Comparison

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| **Scope** | Function Scope | Block Scope | Block Scope |
| **Reassign** | ✅ Yes | ✅ Yes | ❌ No |
| **Redeclare** | ✅ Yes | ❌ No | ❌ No |
| **Hoisting** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Before Declaration** | `undefined` | ❌ ReferenceError | ❌ ReferenceError |
| **Must Initialize** | ❌ No | ❌ No | ✅ Yes |
| **Modern JS Usage** | Less preferred | Common | Most preferred when value won't change |



### 💡 Example

```javascript
// var → Redeclare
var age = 18;
var age = 20; // ✅ Redeclare allowed

// let → Reassign
let price = 100;
price = 150; // ✅ Reassign allowed

// const → Reassign not allowed
const country = "Bangladesh";
// country = "Iran"; // ❌ Reassign not allowed

```

</details><br>
















<details>
<summary>⚙️ Default Parameter</summary>

### 📝 What is Default Parameter?

**Default Parameter** হলো function-এর parameter-এর জন্য আগে থেকেই একটি default value সেট করে রাখা। Function call করার সময় কোনো argument না দিলে সেই default value automatically ব্যবহার হয়।

Default value দেওয়ার সময় parameter-টি **কী কাজ করছে এবং কোন value logical**, সেটা বুঝে value নির্বাচন করতে হয়। সব ক্ষেত্রে একই default value ব্যবহার করা ঠিক নয়।

### 📌 কখন কোন Default Value ব্যবহার করব?

- **String** → `""`  
  নাম, text বা string-related parameter-এর ক্ষেত্রে সাধারণত empty string ব্যবহার করা যায়।

- **Number (Addition)** → `0`  
  যোগের ক্ষেত্রে কোনো value না থাকলে `0` ব্যবহার করলে মূল সংখ্যার মান অপরিবর্তিত থাকে।

- **Number (Multiplication)** → `1`  
  গুণের ক্ষেত্রে `0` দিলে পুরো result `0` হয়ে যাবে। তাই সাধারণত `1` ব্যবহার করা উপযুক্ত।

- **Array** → `[]`  
  কোনো list বা collection-এর default value হিসেবে empty array ব্যবহার করা যায়।

- **Object** → `{}`  
  কোনো object-এর default value হিসেবে empty object ব্যবহার করা যায়।

- **Boolean** → `false`  
  কোনো condition বা flag-এর default state হিসেবে প্রয়োজন অনুযায়ী `false` ব্যবহার করা যায়।

### 💡 Important Note

Default Parameter-এর কোনো fixed value নেই। **Function-এর কাজ অনুযায়ী সবচেয়ে উপযুক্ত default value নির্বাচন করতে হয়।** ভুল default value দিলে function-এর expected result পরিবর্তন হয়ে যেতে পারে।

উদাহরণ হিসেবে, addition-এর ক্ষেত্রে `0` উপযুক্ত হলেও multiplication-এর ক্ষেত্রে `0` ব্যবহার করলে result সবসময় `0` হয়ে যাবে। তাই default value দেওয়ার আগে parameter-টি কীভাবে ব্যবহার হচ্ছে তা বুঝতে হবে।

</details><br>


















<details>
<summary>📝 Template Literals — String & Dynamic Content</summary>

### 📖 Overview

**Template Literals** হলো JavaScript-এ string লেখার একটি সহজ ও flexible পদ্ধতি। এটি লেখার জন্য সাধারণ quote (`' '` বা `" "`) এর পরিবর্তে **backtick (`` ` ` ``)** ব্যবহার করা হয়। Template Literals-এর মাধ্যমে **single-line ও multi-line string** সহজে লেখা যায় এবং `${}` ব্যবহার করে string-এর মধ্যে সরাসরি **variable বা JavaScript expression** যুক্ত করা যায়। এর ফলে dynamic text এবং HTML structure তৈরি করা আরও সহজ হয়।

### 📌 Key Points

- Template Literals লেখার জন্য **backtick (`` ` ` ``)** ব্যবহার করা হয়।
- **Single-line** string-এর পাশাপাশি **multi-line** string লেখা যায়।
- `${}` ব্যবহার করে string-এর মধ্যে **variable** বসানো যায়।
- `${}` এর মধ্যে **JavaScript expression** ব্যবহার করা যায়।
- Dynamic content এবং HTML structure তৈরি করতে এটি অনেক useful।

### 💡 Example

```javascript
const firstName = "Bayjid";
const lastName = "Alom";

const fullName = `My name is ${firstName} ${lastName}`;

console.log(fullName);
```

</details><br>















<details>

<summary>📝 Arrow Function — Short Syntax</summary>

### 📖 Overview

**Arrow Function (`=>`)** হলো JavaScript-এ function লেখার একটি সংক্ষিপ্ত ও সহজ syntax। এটি মূলত function expression-এর shorter form হিসেবে ব্যবহার করা হয়। একটি মাত্র expression থাকলে `{}` এবং `return` না লিখেও value automatically return করা যায়। একাধিক expression থাকলে `{}` ব্যবহার করে প্রয়োজনীয় value ফেরত দিতে `return` লিখতে হয়।

### 📌 Syntax

```javascript
const functionName = (parameters) => expression;
```
</details><br>













<details>

<summary>📝 Spread Operator (...) — Array & Object</summary>

### 📖 Overview

**Spread Operator (`...`)** হলো JavaScript-এর একটি operator, যা কোনো **Array বা Object-এর elements/properties-কে ছড়িয়ে দিতে** ব্যবহার করা হয়। এটি সাধারণত **array/object copy, merge এবং নতুন value যোগ করার** ক্ষেত্রে ব্যবহার করা হয়।

### 📌 Key Points

- `...` দিয়ে Array-এর elements ছড়িয়ে দেওয়া যায়।
- `...` দিয়ে Object-এর properties ছড়িয়ে দেওয়া যায়।
- Array বা Object-এর **copy তৈরি** করতে ব্যবহার করা যায়।
- একাধিক Array বা Object **merge** করতে ব্যবহার করা যায়।
- Function-এ Array-এর values **arguments হিসেবে পাঠাতে** ব্যবহার করা যায়।
- Spread ব্যবহার করে copy করলে **আলাদা reference** তৈরি হয়।

### 💡 Array-এর Values Spread করা

```javascript
const numbers = [3, 5, 35, 30, 5, 10];

const maximum = Math.max(...numbers);
console.log(maximum);  // 35
```

</details> <br>











<details>

<summary>📝 ES6 Destructuring — Object & Array</summary>

### 📖 Overview

**ES6 Destructuring** হলো JavaScript-এর একটি feature, যার মাধ্যমে **Object ও Array থেকে value সরাসরি variable-এ নেওয়া যায়**। Object Destructuring-এ property name ব্যবহার করে value নেওয়া হয়, আর Array Destructuring-এ **position অনুযায়ী** value নেওয়া হয়। এর ফলে code আরও clean হয় এবং বারবার `object.property` বা array index ব্যবহার করতে হয় না।

### 📌 Key Points

- **Object Destructuring**-এ `{ }` ব্যবহার করা হয়।
- Object-এর **property name** ব্যবহার করে value নেওয়া যায়।
- **Array Destructuring**-এ `[ ]` ব্যবহার করা হয়।
- Array-তে **position অনুযায়ী** value নেওয়া হয়।
- `...rest` ব্যবহার করে Object বা Array-এর **বাকি values** একসাথে নেওয়া যায়।

### 💡 Object Destructuring Example

```javascript
const student = {
  name: "Bayjid",
  age: 20,
  city: "Mymensingh"
};

const { name, age } = student;
console.log(name, age);   // Bayjid 20
```



```
const student = {
  name: "Bayjid",
  age: 20,
  city: "Mymensingh",
  course: "CST"
};

const { name, ...otherInfo } = student;
console.log(name);  // Bayjid
console.log(otherInfo);  // { age: 20, city: "Mymensingh", course: "CST" }

```




### 💡 Array Destructuring Example

```
const numbers = [10, 20, 30, 40, 50];
const [numOne, numTwo, ...remaining] = numbers;

console.log(numOne, numTwo);   // 10 20
console.log(remaining);  // [30, 40, 50]
```

</details><br>















<details>

<summary>📝 Object Methods — Keys, Values & Entries</summary>

### 📖 Overview

JavaScript-এ Object-এর **key/property, values এবং key-value pairs** পাওয়ার জন্য `Object.keys()`, `Object.values()` এবং `Object.entries()` ব্যবহার করা হয়। `Object.keys()` সব property name একটি array হিসেবে দেয়, `Object.values()` সব value একটি array হিসেবে দেয় এবং `Object.entries()` প্রতিটি key ও value-কে `[key, value]` pair হিসেবে একটি 2D array-এর মধ্যে দেয়।

### 📌 Object.keys()

Object-এর শুধুমাত্র **keys/property names** একটি array হিসেবে পাওয়া যায়।

```javascript
const king = {
  name: "John Doe",
  age: 55,
  kingdom: "Pride Lands",
  title: "The Lion King"
};

const keys = Object.keys(king);

console.log(keys);
// [ "name", "age", "kingdom", "title" ]
```

</details><br>














<details>

<summary>📝 Object Freeze, Seal & Delete</summary>

### 📖 Overview

JavaScript-এ Object-এর property **modify, add বা delete** নিয়ন্ত্রণ করার জন্য `Object.freeze()` এবং `Object.seal()` ব্যবহার করা হয়। আর নির্দিষ্ট property delete করার জন্য `delete` operator ব্যবহার করা হয়।

### 📌 Object.freeze()

`Object.freeze()` করলে কোনো property **modify, add বা delete** করা যায় না।

```javascript
const king = {
  name: "John Doe",
  age: 55
};

Object.freeze(king);

king.name = "Simba";
king.queen = "Sarabi";
delete king.age;

console.log(king);
// { name: "John Doe", age: 55 }
```

### 📌 Object.seal()

- Object.seal() করলে existing property modify করা যায়, কিন্তু নতুন property add বা property delete করা যায় না।

```javascript
const king = {
  name: "John Doe",
  age: 55
};

Object.seal(king);

king.name = "Simba";
king.queen = "Sarabi";
delete king.age;

console.log(king);
// { name: "Simba", age: 55 }
```


### 📌 delete Operator

- delete operator ব্যবহার করে Object-এর নির্দিষ্ট property delete করা যায়।


```javascript
const king = {
  name: "John Doe",
  age: 55
};

delete king.age;

console.log(king);
// { name: "John Doe" }
```

</details><br>



















<details>

<summary>📝 Dot Notation & Bracket Notation</summary>

### 📖 Overview

**Dot Notation (`.`)** হলো Object-এর property-কে **dot চিহ্নের মাধ্যমে সরাসরি access করার পদ্ধতি**। এতে Object-এর নামের পরে `.` দিয়ে property name লিখতে হয়।

**Bracket Notation (`[]`)** হলো Object-এর property-কে **square bracket-এর মাধ্যমে access করার পদ্ধতি**। এতে property name সাধারণত quotation-এর মধ্যে লেখা হয় এবং property name-এ **hyphen, space বা special character** থাকলেও access করা যায়।

### 💡 Example

```javascript
const employee = {
  name: "John Doe",
  age: 35,
  position: "Manager",
  "home-address": "123 BM9",
  department: "HR",
  salary: 50000
};

// Dot Notation
console.log(employee.name);
// console.log(employee.home-address); // Error
console.log(employee.salary);

// Bracket Notation
console.log(employee["position"]);
console.log(employee["home-address"]);

console.log(employee[2]); // undefined

const money = employee["salary"];

const key = "position";
console.log(employee[key]);
```

### 📌 Key Points
- object.property → Dot Notation
- object["property"] → Bracket Notation
- Hyphen বা space থাকা property-এর জন্য Bracket Notation ব্যবহার করতে হয়।
- Bracket Notation-এ variable দিয়েও property access করা যায়।
- Object-এ না থাকা property access করলে undefined পাওয়া যায়।


</details><br>






















<details>

<summary>📝 Optional Chaining (?.)</summary>

### 📖 Overview

**Optional Chaining (`?.`)** হলো JavaScript-এর এমন একটি feature, যার মাধ্যমে কোনো property বা nested property access করার সময় মাঝখানে কোনো value `null` বা `undefined` হলে error না দিয়ে `undefined` return করা যায়। এর ফলে কোনো property না থাকলেও safely value check করা যায়।

### 💡 Example

```javascript
const employee = {
  name: "John Doe",
  age: 35,
  position: "Manager",
  family: {
    father: "Richard Doe",
    mother: {
      name: "Jane Doe",
      age: 55
    }
  },
  "home-address": "123 BM9",
  department: "HR",
  salary: 50000
};

// Without Optional Chaining
// console.log(employee.family.grandfather.age); // Error

// Using Optional Chaining
console.log(employee.family?.grandfather?.age); // undefined
```

### 📌 Key Points
- ?. → Optional Chaining Operator
- Missing property থাকলে Error না দিয়ে undefined return করে।
- Nested object-এর property safely access করতে ব্যবহার করা হয়।
- null বা undefined value-এর ক্ষেত্রে useful।

</details><br>














<details>

<summary>📝 Object Looping — for...in</summary>

### 📖 Overview

**Object Looping** হলো JavaScript-এ কোনো Object-এর **property এবং value একে একে access বা iterate** করার পদ্ধতি। Object-এর data নিয়ে কাজ করার জন্য সাধারণত `for...in`, `Object.keys()`, `Object.values()` এবং `Object.entries()` ব্যবহার করা হয়।

→ Array — `for...of`  
→ Object — `for...in`

### 💡 Array — for...of

`for...of` loop ব্যবহার করে Array-এর **প্রতিটি value** একে একে পাওয়া যায়।

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

for (const number of numbers) {
  console.log(number);
}
```

--- 

<br>

### 💡 Object — for...in

for...in loop ব্যবহার করে Object-এর প্রতিটি key একে একে পাওয়া যায়। এরপর bracket notation ব্যবহার করে সেই key-এর value access করা যায়।

```javascript
const employee = {
  name: "John Doe",
  age: 35,
  position: "Manager",
  "home-address": "123 BM9",
  department: "HR",
  salary: 50000
};

for (const key in employee) {
  const value = employee[key];
  console.log(key, "→", value);
}
📌 Output
name → John Doe
age → 35
position → Manager
home-address → 123 BM9
department → HR
salary → 50000
```


</details> 








