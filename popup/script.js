// when clicked on text popup button have the popup move into display
// document.querySelector for the button 
// add event listener on click and have the modal-content move into site

const button = document.querySelector('#button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

button.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

// open modal function
function openModal () {
    modal.style.display = 'block';
    console.log('hi');
}

// close modal function
function closeModal () {
    modal.style.display = 'none';
}