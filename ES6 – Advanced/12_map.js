/**
map() কী?
map() হলো JavaScript-এর একটি array method, যা array-এর প্রতিটি element-এর উপর একটি কাজ করে এবং নতুন একটি array return করে। 
*/


/**
const numbers = [1, 2, 3, 4, 5];

const doubled = [];

for (const number of numbers) {
    doubled.push(number * 2)
    }
    
console.log(doubled); 
// [ 2, 4, 6, 8, 10 ]
*/



/** 
const numbers = [1, 2, 3, 4, 5];

const doubleIt = num => num * 2;
const doubled = numbers.map(doubleIt);

console.log(doubled);
// [ 2, 4, 6, 8, 10 ]
**/


/** 
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
console.log(doubled);
// [ 2, 4, 6, 8, 10 ]

**/




const numbers = [1, 2, 3, 4, 5];
const squareValue = numbers.map(number => number * number);
console.log(squareValue);
// [ 1, 4, 9, 16, 25 ]



const friends = ['Zaved', 'Naved', 'Khaled', 'Sajed'];
const firstLetters = friends.map(friend => friend[0].toUpperCase())
console.log(firstLetters);
// [ 'Z', 'N', 'K', 'S' ]








const products = [
    { name: "iPhone", price: 799, brand: "Apple" },
    { name: "Galaxy", price: 699, brand: "Samsung" },
    { name: "Pixel", price: 599, brand: "Google" }
];

const prices = products.map(product => product.price)
console.log(prices);
// [ 799, 699, 599 ]



const names = products.map((product, index, productsArray) => {
    const upperCaseName = product.name.toUpperCase();

    console.log(index, upperCaseName, productsArray);
    /**
     0 IPHONE [
         { name: 'iPhone', price: 799, brand: 'Apple' },
         { name: 'Galaxy', price: 699, brand: 'Samsung' },
         { name: 'Pixel', price: 599, brand: 'Google' }
    ]
    **/
    return upperCaseName;
})

console.log(names);
//  [ 'IPHONE', 'GALAXY', 'PIXEL' ]






const result = products.forEach(product => console.log(product.brand))
// Apple
// Samsung
// Google
console.log(result);   // undefined









