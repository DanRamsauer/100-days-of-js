const counter = document.querySelector('#counter');
const subtract = document.querySelector('#subtract');
const reset = document.querySelector('#reset');
const add = document.querySelector('#add');

// want to create a counter app
// when clicked on subtract want to take away from counter
// when clicked on add want to add to counter
// when clicked on reset want to have counter go to 0

subtract.addEventListener("click", ()=>{
    counter.innerText--;
    setColor();
});

reset.addEventListener("click", ()=>{
    counter.innerText = 0;
    setColor();
});

add.addEventListener("click", ()=>{
    counter.innerText++;
    setColor();
});

const setColor = () => {
    if(counter.innerText > 0){
        counter.style.color = 'yellow';
    } else if(counter.innerText < 0){
        counter.style.color = 'red';
    }else {
        counter.style.color = 'white';
    }
}

setColor();

console.log(counter.innerText);