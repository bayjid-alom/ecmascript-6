/***
➖ Decrement কী?
Decrement বলতে কোনো variable-এর value কমানোকে বোঝায়। সাধারণত কোনো value ১ করে কমানোকে decrement বলা হয়। JavaScript-এ decrement করার জন্য -- operator ব্যবহার করা হয়।

count-- → আগে value use হয়, পরে ১ কমে
--count → আগে ১ কমে, পরে value use হয়

*/


let count = 10;

count--;
console.log(count--);  // 9  Next console-এ এক কমবে। (8)

count--;
count--;
console.log(--count);  // 5

