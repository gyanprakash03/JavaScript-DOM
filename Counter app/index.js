
const incbutton = document.getElementById('Increment-btn');
const decButton = document.getElementById('Decrement-btn');
const counter = document.getElementById('counter');
const resetButton = document.getElementById('Reset-btn');

incbutton.addEventListener('click', function() {

    counter.textContent++;
})

decButton.addEventListener('click', function() {

    counter.textContent--;
})

resetButton.addEventListener('click', function() {

    counter.textContent = 0;
})