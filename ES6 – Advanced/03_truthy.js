/*
Falsy values:
false
0
-0
0n
""
null
undefined
NaN



Truthy values:
true
1
-1
"hello"
"0"
[]
{}
function() {}



Examples :
data = 0;          // Falsy
data = "";         // Falsy
data = "0";        // Truthy
data = false;      // Falsy
data = true;       // Truthy
data = null;       // Falsy
data = undefined;  // Falsy
data = {};         // Truthy

*/



let data;
data = true;
data = "0";
data = {};
data = []

data = false;
data = 0;
data = "";
data = undefined;
data = null;

if (data) {
    console.log("Truthy");
}
else {
    console.log("Falsy");
}



let price = 0;
if (!price) {
    console.log("Price is Falsy.");
}



/*
!!value ব্যবহার করে কোনো value-কে true বা false-এ রূপান্তর করা যায়।
এটি value-টি truthy নাকি falsy তা নির্ধারণ করে।
*/
let value = 0;
if (!!value) {
    console.log("Truthy");
}



/***
let name = "bayjid";
console.log(!name);   // false
console.log(!!name);  // true

"bayjid" → Truthy
!name    → false
!!name   → true

অর্থাৎ, name-এর মধ্যে value থাকায় !!name এর ফলাফল true।
***/



