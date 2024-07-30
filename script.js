// Calculator Operation
let firstNum = 0;
let secondNum = 0;
let operator = "";

// Functionality
function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstnum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

// Operate()
function operate(firstNum, operator, secondNum) {
    if (operator === "+") {
        add(firstNum, secondNum);
    } else if (operator === "-") {
        subtract(firstNum, secondNum);
    } else if (operator === "*") {
        multiply(firstNum, secondNum);
    } else if (operator === "/") {
        divide(firstNum, secondNum);
    }
};