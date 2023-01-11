// grab message and message.value
// count vowels in message. value
// display how many vowels there are on submit 
    // on submit preventDefault()

const message = document.querySelector('#message');
const submit = document.querySelector('#button');
const result = document.querySelector('#results');
const vowels = ['a', 'e', 'i' , 'o', 'u'];

// add event listener on submit take message and call vowel counter function while passing the message value as a parameter
submit.addEventListener('click', (e) => {
    // preventing refresh on submit
    e.preventDefault();
    // creating a new variable / calling the function with the user message passed into the function as a parameter
    const vowelCount = vowelCounter(message.value);
    // if there are more than one vowels give the user this message
    if (vowelCount > 1) {
        // setting the innerHtml for feedback to the user
        result.innerText = `There are ${vowelCount} vowels`;
    // other wise if there are no vowels give the user this message
    } else {
        result.innerText = `There is ${vowelCount} vowel`;
    }
    // clearing input for user to input another message easier
    message.value = '';
});

// function for vowel counter
function vowelCounter (str) {
    // defining counter valiable
    let counter = 0;
    // looping through the string
    for (let char of str) {
        // if there are vowels in the string
        if (vowels.includes(char)) {
            // add one to the counter
            counter++;
        }
    }
    // returning the counter from the function
    return counter;
};