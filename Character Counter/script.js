const input = document.querySelector('#input');
const counter = document.querySelector('#counter');

input.addEventListener('keyup', () => {
    counter.innerText = input.value.length
});