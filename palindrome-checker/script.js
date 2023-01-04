// Check if the word is a plaindrome (same word in reverse ex: racecar)
// break up word using [...] or .split()
// reverse the word using .reverse()
// join the word back together using .join('')
// check if new word is === to old word

const message = document.querySelector("#message");
const enter = document.querySelector("#button");

enter.addEventListener('click', palindromeChecker);

function palindromeChecker (e) {
    // prevent refresh of page
    e.preventDefault();
    // creating a variable for the users word
    const userWord = message.value;
    // [...userword] breaks down the word into an array
        // .reverse() reverses the arrays order
        // .join('') joins the array into a new string with out the '' it would not be a string and wouldnt work
    const newWord = [...userWord].reverse().join('');


    console.log(newWord);
};


// message.addEventListener('change', (e)=> {
//     console.log(e);
// })

// console.log(message.value);