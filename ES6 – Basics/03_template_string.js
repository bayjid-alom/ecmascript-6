// Template Literals

// Template Literals ব্যবহার করে সহজে multiline text
// এবং string-এর মধ্যে variable বা expression ব্যবহার করা যায়।
// Template Literals লেখার জন্য backtick (` `) ব্যবহার করতে হয়।

const firstName = "Bayjid";
const lastName = "Alom";
// ${} এর মধ্যে variable বসিয়ে dynamic string তৈরি করা যায়।
const fullName = `My name is ${firstName} ${lastName}`;
console.log(fullName);





// Expression inside Template Literals
// ${} এর মধ্যে সরাসরি JavaScript expression লিখতে পারি।

const giveMe = `Give me money ${(10 + 10) * 5 + 500} Taka.`;
console.log(giveMe);
// Output:
// Give me money 600 Taka.





function getHtmlCard(name, description, price) {
    const div = `
        <div class="card">
            <h2> ${name.toUpperCase()} </h2>
            <p> Price : ${price} </p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p> ${description} </p>
        </div>
    `;

    console.log(div)
}

getHtmlCard("iPhone 16 Pro", "This phone is very expensive.", 150000)



/**
 Output :

    <div class="card" >
        <h2> IPHONE 16 PRO </h2>
        <p> Price : 150000 </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <p> This phone is very expensive. </p>
    </div >

 */


