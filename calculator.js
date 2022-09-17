// basic operator functions
// add
function add(a, b){
    if (typeof(a) != "number" || typeof(b) != "number") return 'ERROR - input is not a number';
    return a + b;
}
// subtruct
function subtruct(a, b){
    if (typeof(a) != "number" || typeof(b) != "number") return 'ERROR - input is not a number';
    return a - b;
}
//multiply
function multiply(a, b){
    if (typeof(a) != "number" || typeof(b) != "number") return 'ERROR - input is not a number';
    return a * b;
}
//divide
function divide(a, b){
    if (typeof(a) != "number" || typeof(b) != "number") return 'ERROR - input is not a number';
    if (b === 0) return 'ERROR - cant divide by zero'
    return a / b;
}
//This function get two numbers and an operator,
//calls the operator function with (a, b) as arguments.
function operate(a, b, operator){
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtruct(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "ERROR - invalid operator"
    }
}



const display = document.querySelector('#display');

const inputKeys = document.querySelectorAll('.number, .operator');
inputKeys.forEach(key => key.addEventListener('click', getInput));

function getInput(e){
    if (e.target.classList =='number'){
        display.innerText += e.target.innerText;
        return;
    }
    if (e.target.classList == 'operator'){
        display.innerText += e.target.innerText;
        return;
    }
    return 'getInput ERROR';
}

const back = document.querySelector('#backspace');
back.addEventListener('click', backspace);

function backspace(){
    displayText = display.innerText.split('');
    displayText.splice(-1);
    display.innerText = displayText.join('');
}

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearDisplay);

function clearDisplay(){
    display.innerText = '';
}