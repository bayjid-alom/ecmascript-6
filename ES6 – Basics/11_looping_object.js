/***
 *Object Looping হলো JavaScript-এ কোনো Object-এর property এবং value একে একে access বা iterate করার পদ্ধতি। Object-এর data-এর উপর কাজ করার জন্য সাধারণত for...in loop, Object.keys(), Object.values() এবং Object.entries() ব্যবহার করা হয়।

→ Array — for...of
→ Object — for...in

***/


const numbers = [1, 2, 3, 4, 5, 6]
for (const number of numbers) {
    // console.log(number);
}



const employee = {
    name: "John Doe",
    age: 35,
    position: "Manager",
    'home-address': '123 BM9',
    department: "HR",
    salary: 50000
};

for (const key in employee) {
    // console.log("→", key);
    const value = employee[key]
    console.log(key, "→", value);
}


/**
 Output: 

    name → John Doe
    age → 35
    position → Manager
    home-address → 123 BM9
    department → HR
    salary → 50000
**/


