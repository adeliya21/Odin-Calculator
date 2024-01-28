// Global variables
let operator = '';
let currentValue = '';
let previousValue = '';


// Store all HTML components in JS
document.addEventListener('DOMContentLoaded', function(){
    let clear = document.querySelector('#clear-btn');
    let equal = document.querySelector('.equal');
    let deciaml = document.querySelector('.deciaml');

    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');

    let previousScreen = document.querySelector('.previous');
    let curretnScreen = document.querySelector('.current');

    numbers.forEach((number) => number.addEventListener('click', function(e) {
        handleNumber(e.target.textContent) // change the global varibale to store input number
        curretnScreen.textContent = currentValue; // update the screen to show value of global variable
    }))
})

// change the global varibale to store input number
function handleNumber(num) {
    if (currentValue.length < 5) { 
        currentValue += num;
    }
}