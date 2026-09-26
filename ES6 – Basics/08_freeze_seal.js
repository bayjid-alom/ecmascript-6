/**
 * Object.freeze() —
 * Object-এর কোনো property modify, delete বা নতুন property add করা যায় না।
 *
 * Object.seal() —
 * Existing property-এর value modify করা যায়,
 * কিন্তু নতুন property add বা existing property delete করা যায় না।
 *
 * delete operator —
 * Object-এর কোনো নির্দিষ্ট property delete করার জন্য ব্যবহার করা হয়।
 * যেমন: delete king.age;
 **/


const king = {
  name: "John Doe",
  age: 55,
  kingdom: "Pride Lands",
  title: "The Lion King"
};


// Object.freeze() → কোনো property modify, delete বা add করা যায় না.
// Object.freeze(king);


// Object.seal() → existing property-এর value modify করা যায়,
// কিন্তু নতুন property add বা existing property delete করা যায় না.
Object.seal(king);




// Property delete
delete king.age;
delete king.kingdom;

// Change property name
king.queen = 'Sarabi';
king.name = 'King Simba'

console.log(king);