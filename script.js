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
    let result = firstNum / secondNum;

    if (secondNum === 0) {
        display.textContent = "Error"
    } else if (!Number.isInteger(result)) {
        display.textContent = result.toFixed(10);
    } else {
        display.textContent = result;
    }
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
    } else {
        secondNum += `${num}`;
        display.textContent = secondNum;
    }
}

// Set Decimal
function setDeci() {
    let lenOne = firstNum.length;
    let lenTwo = secondNum.length;
    let lenOper = currentOperator.length;
    
    if (lenOne > 0 && lenOper === 0) {
        if (firstNum.includes(".")) {
            return;
        } else { 
            firstNum += ".";
            display.textContent = firstNum;
        }
    } else if (lenTwo > 0 && lenOper === 1) {
        if (secondNum.includes(".")) {
            return;
        } else {
            secondNum += ".";
            display.textContent = secondNum;
        }
    }
}

// Number Button Functionality
const number = document.querySelectorAll("#num");
number.forEach((num) => {
    num.addEventListener("click", () => {
        setNum(num.textContent);
    })
    num.addEventListener("mousedown", () => {
        num.classList.add("click");
    })
    num.addEventListener("mouseup", () => {
        num.classList.remove("click");
    })
})

// Decimal Button Functionality
const decimal = document.querySelector("#dot");
decimal.addEventListener("click", () => {
    setDeci();
})
decimal.addEventListener("mousedown", () => {
    decimal.classList.add("click");
})
decimal.addEventListener("mouseup", () => {
    decimal.classList.remove("click");
})

// Operator Button Functionality
const operator = document.querySelectorAll("#ope");
operator.forEach((ope) => {
    ope.addEventListener("click", () =>{
        currentOperator = ope.textContent;
    })
    ope.addEventListener("mousedown", () => {
        ope.classList.add("click");
    })
    ope.addEventListener("mouseup", () => {
        ope.classList.remove("click");
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
equals.addEventListener("mousedown", () => {
    equals.classList.add("click");
})
equals.addEventListener("mouseup", () => {
    equals.classList.remove("click");
})

// Clear Button Functionality
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    currentOperator = "";
    display.textContent = "0";
})
clear.addEventListener("mousedown", () => {
    clear.classList.add("click");
})
clear.addEventListener("mouseup", () => {
    clear.classList.remove("click");
})

// Delete (Backspace) Button Functionality
const del = document.querySelector("#del");
del.addEventListener("click", () => {
    let lenOne = firstNum.length;
    let lenTwo = secondNum.length;
    let lenOper = currentOperator.length;

    if (lenOne > 1 && lenOper === 0) {
        firstNum = firstNum.slice(0, lenOne - 1);
        display.textContent = firstNum;
        console.log(firstNum);
    } else if (lenOper === 1 && lenTwo > 1) {
        secondNum = secondNum.slice(0, lenTwo - 1);
        display.textContent = secondNum;
    } else if (lenOne === 1) {
        firstNum = "";
        display.textContent = "0";
    } else if (lenTwo === 1) {
        secondNum = "";
        display.textContent = "0";
    }
})
del.addEventListener("mousedown", () => {
    del.classList.add("click");
})
del.addEventListener("mouseup", () => {
    del.classList.remove("click");
})