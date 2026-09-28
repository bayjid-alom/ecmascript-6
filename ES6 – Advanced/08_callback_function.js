/***
📞 Callback Function কী?
Callback function হলো এমন একটি function, যেটাকে অন্য একটি function-এর argument হিসেবে পাঠানো হয়, এবং সেই function পরে প্রয়োজন অনুযায়ী তাকে call করে।

 */



function settleLife(name, hasJob, marriage, partner) {

    if (hasJob) {
        marriage(partner);
    }
}

// Callback function 
function sayAgree(partner) {
    console.log("I agree to marry", partner);
}

settleLife("Tomal", true, sayAgree, "Pori");
//  Output:
//  I agree to marry Pori





/***
 এখানে sayAgree function-টাকে settleLife()-এর marriage parameter হিসেবে pass করা হয়েছে। পরে marriage(partner) দিয়ে সেই function-টাকে call করা হয়েছে। তাই sayAgree এখানে callback function।

      ↓
sayAgree function pass
     ↓
hasJob = true
     ↓
callback(partner)
     ↓
sayAgree("Pori")
     ↓
I agree to marry Pori

মূল concept: sayAgree-কে সরাসরি call না করে settleLife()-এর কাছে পাঠানো হয়েছে, তারপর settleLife() প্রয়োজন অনুযায়ী সেটাকে call করেছে—এটাই Callback Function-এর working flow।
 */
