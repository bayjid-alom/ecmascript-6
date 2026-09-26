## 📝 ECMAScript 6 (ES6)


### ❓ About ECMAScript

**ECMAScript** হলো একটি scripting language specification বা standard, যা JavaScript-এর language features এবং rules নির্ধারণ করে।

সহজভাবে বললে, **JavaScript হলো একটি programming language, আর ECMAScript হলো সেই language-এর standard/specification।**

JavaScript-এর বিভিন্ন version বা feature development এই ECMAScript standard অনুসরণ করে।

উদাহরণ:

| Version | Year |
|---|---:|
| **ES1** | 1997 |
| **ES2** | 1998 |
| **ES3** | 1999 |
| **ES4** | — |
| **ES5** | 2009 |
| **ES5.1** | 2011 |
| **ES6** | 2015 |

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

















## 📝 Notes ( Details )

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

</details>






