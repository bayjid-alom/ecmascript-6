/**
❔ Arguments কী?
JavaScript-এ Arguments হলো function call করার সময় function-এর মধ্যে পাঠানো actual values। অর্থাৎ, function-কে call করার সময় যে value বা data পাঠানো হয়, সেগুলোকে arguments বলা হয়।

**/


function add(num1, num2) {
    console.log("Arguments :", arguments, arguments[2]);

    // to make actual array
    const args = [...arguments]
    console.log("Args :", args);

    return num1 + num2;
}

add(2, 5, 20, 40, 60)

// Array like object
// Arguments : [Arguments] { '0': 2, '1': 5, '2': 20, '3': 40, '4': 60 } 20


// Actual array
// Args : [ 2, 5, 20, 40, 60 ]
