let numberButton = document.querySelectorAll('.number')
let operatorButton = document.querySelectorAll('.operator')
let equalsButton = document.querySelector('.equals')
let clearButton = document.querySelector('.clear')
let display = document.querySelector('.display')

let firstOperand = ''
let secondOperand = ''
let currentOperator = null
let resetScreen = false


numberButton.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent)))



operatorButton.forEach((button)=> 
    button.addEventListener('click', () => setOperator(button.textContent)))


equalsButton.addEventListener('click', evaluate)



function setOperator(operator) {
    if (currentOperator !== null) {
        evaluate()
    }

    firstOperand = display.textContent
    currentOperator = operator

    resetScreen = true
}

function evaluate() {
    secondOperand = display.textContent

    display.textContent = operate(currentOperator, firstOperand, secondOperand)

    currentOperator = null
}

function appendNumber(num) {
    if (resetScreen === true) {
        reset()
    }

    display.textContent += num
}

function reset() {
    display.textContent = ''
    resetScreen = false
}


function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}


function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)

    switch (operator) {
        case '+':
            return add(a, b)

        case '-':
            return subtract(a, b)

        case 'x':
            return multiply(a, b)

        case '/':
            return divide(a, b)

        default:
            return null
    }
}