// Check if the word is a plaindrome (same word in reverse ex: racecar)
// break up word using [...] or .split()
// reverse the word using .reverse()
// join the word back together using .join('')
// check if new word is === to old word

const message = document.querySelector("#message");
const enter = document.querySelector("#button");
const results = document.querySelector("#results");

enter.addEventListener('click', palindromeChecker);

function palindromeChecker (e) {
    // error handling for if the user doesnt input anything
    if (message.value === '') {
        // It can be empty becauseI have made the input required so this just stops it from running no matter what
    }
    else {
        // prevent refresh of page
        e.preventDefault();
        // error handling not allowing the user to keep appending the same message over and over we are clearing the innerText before it appends again
        results.innerText = '';
        
        // creating a variable for the users word
        const userWord = message.value;
        // [...userword] breaks down the word into an array
        // .reverse() reverses the arrays order
            // .join('') joins the array into a new string with out the '' it would not be a string and wouldnt work
            const newWord = [...userWord].reverse().join('');
            
            // if the word in reverse is the same as the word normally it is a palindrome
            if (newWord === userWord) {
                results.append(`${userWord} is ${newWord} backwards hence ${userWord} IS a palindrome`);
            }
            else {
                results.append(`${userWord} is ${newWord} backwards hence ${userWord} is NOT a palindrome`);
            }
            // clearning the value after the function runs to allow the input to be empty for easier typing for a new word
            message.value = '';
    }
};