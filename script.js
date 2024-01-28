// Global variables
let operator = '';
let currentValue = '';
let previousValue = '';


document.addEventListener('DOMContentLoaded', function(){
    // ------------- Store all HTML components in JS --------------
    let clear = document.querySelector('#clear-btn');
    let equal = document.querySelector('.equal');
    let deciaml = document.querySelector('.deciaml');

    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');

    let previousScreen = document.querySelector('.previous');
    let currentScreen = document.querySelector('.current');


    // ------------------- FUNCTIONS -------------------------------
    numbers.forEach((number) => number.addEventListener('click', function(e) {
        handleNumber(e.target.textContent) //  handleNumber function
        currentScreen.textContent = currentValue; // update the current screen to show value of current global variable
    }))

    operators.forEach((op) => op.addEventListener('click', function(e) {
        handleOperator(e.target.textContent); //  handleOperator function
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

    // call calculate function
    equal.addEventListener('click', function() {
        if (previousValue != '' && currentValue != '') {
            calculate();
            previousScreen.textContent = ''; // update the previousScreen to empty
            if (previousValue.length < 5){
                currentScreen.textContent = previousValue; // update the currentScreen to result of calculate stored in previousValue
            }
            else {
                currentScreen.textContent = previousValue.slice(0,5) + '...'; 
            }
        }
    })
})

// handleNumber function
function handleNumber(num) {
    if (currentValue.length < 5) { 
        currentValue += num; // change the global varibale to store input number
    }
}

// handleOperator function
function handleOperator(op) {
    operator = op; // change the global variable to store operator and 
    previousValue = currentValue; // update previous value
    currentValue = ''; // update current value
}

// calcualte function
function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === '+') {
        previousValue += currentValue;
    } 
    else if (operator === '-') {
        previousValue -= currentValue;
    }
    else if (operator === '/') {
        previousValue /= currentValue;
    }
    else if (operator === 'x') {
        previousValue *= currentValue;
    }
    // after calculate, the global previousValue stores the result of calcualtion
    // and the global currentValue also stores the result as it may be used for next operations
    // round the result of calculate
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString(); 
    currentValue = previousValue.toString();
}

// round function
function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}