// grab the h2 and button
// add event listener on button click copy h2 text to users clipboard
// when clicked change button from copy to 'coppied' for a cuople seconds

const message = document.querySelector('h2');
const copy = document.querySelector('button');

copy.addEventListener('click', () => {
    message.select();
});