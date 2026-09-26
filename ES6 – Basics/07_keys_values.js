/***
 শুধুমাত্র Object-এর key/property অথবা values পেতে Object.keys() এবং Object.values() ব্যবহার করা হয়। Object.keys() object-এর সব property name একটি array হিসেবে দেয়, আর Object.values() object-এর সব value একটি array হিসেবে দেয়।

 Object.entries(king) object-এর প্রতিটি key/property এবং তার value-কে একসাথে একটি ছোট array [key, value] হিসেবে দেয়। সবগুলো [key, value] মিলে একটি 2D array তৈরি হয়।
**/

const king = {
  name: "John Doe",
  age: 55,
  kingdom: "Pride Lands",
  title: "The Lion King"
};

const keys = Object.keys(king)
// console.log(keys);
// [ 'name', 'age', 'kingdom', 'title' ]


const values = Object.values(king)
// console.log(values);
// [ 'John Doe', 55, 'Pride Lands', 'The Lion King' ]



const entries = Object.entries(king);
// console.log(entries);

/**
 [
  [ 'name', 'John Doe' ],
  [ 'age', 55 ],
  [ 'kingdom', 'Pride Lands' ],
  [ 'title', 'The Lion King' ]
]
 */