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
    let currentScreen = document.querySelector('.current');

    numbers.forEach((number) => number.addEventListener('click', function(e) {
        handleNumber(e.target.textContent) // change the global varibale to store input number
        currentScreen.textContent = currentValue; // update the screen to show value of global variable
    }))

    operators.forEach((op) => op.addEventListener('click', function(e) {
        handleOperator(e.target.textContent); // change the global variable to store operator and update previous and current values
        previousScreen.textContent = previousValue + ' ' + operator; // update the previous screen to show previous number and operator
        currentScreen.textContent = currentValue; // update the current screen to current number which is empty
    }))

    // clear function
    clear.addEventListener('click', function() {
        operator = '';
        currentValue = '';
        previousValue =  '';
        currentScreen.textContent = currentValue;
        previousScreen.textContent = previousValue;
    })
})

// change the global varibale to store input number
function handleNumber(num) {
    if (currentValue.length < 5) { 
        currentValue += num;
    }
}

// change the global variable to store operator and update previous and current values
function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

