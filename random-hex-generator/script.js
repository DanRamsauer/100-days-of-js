// grab generate button and add event listener to it
// when clicked generate a random hex color
// have that color become our new background

const hex = document.getElementById('hex');
const button = document.getElementById('generate');

const generateColor = () => {
    // toString converts number to string and the parameter 16 is allowing us to go past base 9 allowing us to get letters along with numbers (ex.123456789abcdefg)
    // substring tells us where to start so the 2 is after the 0. and the 8 is telling us where to end extracting the numbers / letters
    const randomColor = Math.random().toString(16).substring(2, 8);

    // Changing background color to our randomly generated hex
    document.body.style.backgroundColor = `#${randomColor}`;

    // changing the inner html of our box on the screen for the user to see
    hex.innerHTML = `#${randomColor}`;
}

// adding an event listener to generate a new color on click of the button
button.addEventListener('click', generateColor);

generateColor();