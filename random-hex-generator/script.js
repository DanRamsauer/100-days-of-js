// grab generate button and add event listener to it
// when clicked use math.random to generate a random number
// use math.floor or ceiling to round

const number = document.getElementById('number');
const generate = document.querySelector('button');

generate.addEventListener('click', () => {
    // using math.floor to round down and math.random * 10 to generate random number to 10 and adding 1 to bring it back to 10
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    number.innerText = randomNumber;
})