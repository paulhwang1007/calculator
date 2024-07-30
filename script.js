// Calculator Operation Variables
let firstNum = "";
let secondNum = "";
let currentOperator = "";

// Operator Functionality
function add(firstNum, secondNum) {
    display.textContent = firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    display.textContent = firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    display.textContent = firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    display.textContent = firstNum / secondNum;
}

// Operate()
function operate(firstNum, secondNum, currentOperator) {
    if (currentOperator === "+") {
        add(firstNum, secondNum);
    } else if (currentOperator === "-") {
        subtract(firstNum, secondNum);
    } else if (currentOperator === "*") {
        multiply(firstNum, secondNum);
    } else if (currentOperator === "/") {
        divide(firstNum, secondNum);
    }
};

// Display
const display = document.querySelector("#display");

// Set Number
function setNum(num) {
    if (currentOperator === "") {
        firstNum += `${num}`;
        display.textContent = firstNum;
        console.log(firstNum);
    } else {
        secondNum += `${num}`;
        display.textContent = secondNum;
        console.log(secondNum);
    }
    
}

// Number Button Functionality
const number = document.querySelectorAll("#num");
number.forEach((num) => {
    num.addEventListener("click", () => {
        setNum(num.textContent);
    })
})

// Operator Button Functionality
const operator = document.querySelectorAll("#ope");
operator.forEach((ope) => {
    ope.addEventListener("click", () =>{
        currentOperator = ope.textContent;
        console.log(currentOperator);
    })
})

// Equals Button Functionality
const equals = document.querySelector("#equ");
equals.addEventListener("click", () => {
    if (firstNum === "" || secondNum === "" || currentOperator === "") {
        return;
    } else {
        operate(Number(firstNum), Number(secondNum), currentOperator);
    }
})

// Clear Button Functionality
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    currentOperator = "";
    display.textContent = "0";
})