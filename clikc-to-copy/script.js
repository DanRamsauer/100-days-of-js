// grab the h2 and button
// add event listener on button click copy h2 text to users clipboard
// when clicked change button from copy to 'coppied' for a cuople seconds

const message = document.querySelector('#text');
const copy = document.querySelector('#copy');

const copyText = (e) => {
    // preventing refresh
    e.preventDefault();
    // selecting the message
    message.select();
    // selection range of start to the end
    message.setSelectionRange(0, 99999999);
    // copying the text
    document.execCommand('copy');
};

copy.addEventListener('click', copyText);
