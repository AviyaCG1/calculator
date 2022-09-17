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