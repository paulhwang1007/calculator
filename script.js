// Calculator Operation Variables
let firstNum = "";
let secondNum = "";
let operator = "";

// Operator Functionality
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
function operate(firstNum, secondNum, operator) {
    switch (operator) {
        case "+":
            add(firstNum, secondNum);
        case "-":
            subtract(firstNum, secondNum);
        case "*":
            multiply(firstNum, secondNum);
        case "/":
            divide(firstNum, secondNum);
    }
};

// Display Functionality
const display = document.querySelector("#display");

// Number Button Functionality
const number = document.querySelectorAll("#num");
number.forEach((num) => {
    num.addEventListener("click", () => {
        console.log(num.textContent);
    })
})
