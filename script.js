const keyboardNumbers = document.querySelectorAll('.keyboard-numbers');
// keyboardNumbers.style.backgroundColor = 'purple'
let screenP = document.querySelector('#screen-p');
// screenP = '0';
let num1; 
// let num1 = parseInt(screenP.textContent);

let operator = 'n';
let num2 = 0; //prova a mettere solo 'let num2;'
let resultNum = 0;

// numbers 

function inputNumber(num) {
    console.log('value of operator: ' + operator)
    if (operator == 'n') {
        if (screenP.textContent == 0) {
            // screenP = num;
            screenP.textContent = num;
            // document.appendChild(screenP);
            num1 = parseInt(screenP.textContent);
        } else {
            screenP.textContent += num;
            // document.appendChild(screenP);
            num1 = parseInt(screenP.textContent);
            // console.log(num1);
        }
    } else if (operator == '+' || operator == '*' || operator == '/' || operator == '-' || operator == '*%') {
        if (num2 == 0) {
            screenP.textContent = num;
            num2 = parseInt(screenP.textContent);
            console.log('else if, primo caso');
        } else {
            screenP.textContent += num;
            num2 = parseInt(screenP.textContent);
            console.log('else if, secondo caso');
        }

        console.log(num1 + ' and ' + num2)
    }

}



const btn0 = document.querySelector('#btn-0');
btn0.addEventListener('click', () => inputNumber(0));

const btn1 = document.querySelector('#btn-1');
btn1.addEventListener('click', () => inputNumber(1));

const btn2 = document.querySelector('#btn-2');
btn2.addEventListener('click', () => inputNumber(2));

const btn3 = document.querySelector('#btn-3');
btn3.addEventListener('click', () => inputNumber(3));

const btn4 = document.querySelector('#btn-4');
btn4.addEventListener('click', () => inputNumber(4));

const btn5 = document.querySelector('#btn-5');
btn5.addEventListener('click', () => inputNumber(5));

const btn6 = document.querySelector('#btn-6');
btn6.addEventListener('click', () => inputNumber(6));

const btn7 = document.querySelector('#btn-7');
btn7.addEventListener('click', () => inputNumber(7));

const btn8 = document.querySelector('#btn-8');
btn8.addEventListener('click', () => inputNumber(8));

const btn9 = document.querySelector('#btn-9');
btn9.addEventListener('click', () => inputNumber(9));

// operators

const multiplicationBtn = document.querySelector('#btn-multiplication');
multiplicationBtn.addEventListener('click', () => chooseOperator('*'));

const subtractionBtn = document.querySelector('#btn-subtraction');
subtractionBtn.addEventListener('click', () => chooseOperator('-'));

const additionBtn = document.querySelector('#btn-addition');
additionBtn.addEventListener('click', () => chooseOperator('+'));

const divisionBtn = document.querySelector('#btn-division');
divisionBtn.addEventListener('click', () => chooseOperator('/'));

const percentageBtn = document.querySelector('#btn-percentage');
percentageBtn.addEventListener('click', () => chooseOperator('*%'));

function chooseOperator(op) {
    operator = op;
}

// equal sign 
const equalBtn = document.querySelector('#btn-equal');
equalBtn.addEventListener('click', () => solve(num1, operator, num2));
// equalBtn.addEventListener('click', () => updateValues(num1, num2));

function solve(a, operator, b) {
    console.log(operator);
    console.log(typeof (num1));
    console.log(typeof (num2));
    switch (operator) {
        case '*':
            // console.log(num1*num2);
            num1 = num1 * num2;
            console.log(num1);
            // screenP.textContent = num1;
            // num1 = screenP;
            // num2 = 0;
            operator = 'n';
            num2 = 0;
            break;
        case '-':
            // return num1 - num2;
            num1 = num1 - num2;
            console.log(num1);
            // screenP.textContent = num1;
            operator = 'n';
            num2 = 0;
            break;
        // console.log('num1')
        case '+':
            num1 = num1 + num2;
            console.log(num1);
            // screenP.textContent = num1;
            operator = 'n';
            num2 = 0;
            break;
        case '/':
            num1 = num1 / num2;
            console.log(num1);
            // screenP.textContent = num1;
            operator = 'n';
            num2 = 0;
            break;
        case '*%':
            console.log('caso %')
            num1 = num1 / 100;
            console.log('this is num1: ' + num1)
            num1 = num1 * num2;
            console.log(num1);
            operator = 'n';
            num2 = 0;
            // screenP.textContent = num1;
            break;
    }
    screenP.textContent = parseFloat(num1.toFixed(4)); // Mostra il risultato sullo schermo
    
    // return operator;
    changeNum(num1, operator, num2);
    return num1; // Restituisce il risultato
    
}

function changeNum(newValueNum1, newValueOperator, newValueNum2){
    num1 = newValueNum1;
    operator = newValueOperator;
    num2 = newValueNum2;
}
