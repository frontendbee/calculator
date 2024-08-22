const keyboardNumbers = document.querySelectorAll('.keyboard-numbers');
let screenP = document.querySelector('#screen-p');
let num1;


let operator = 'n';
let num2; 
let resultNum = 0;
let equalSign;

// numbers 

function inputNumber(num) {
    
    // first input 
    if (operator == 'n') {
        if (screenP.textContent == 0) {
            
            screenP.textContent = num;
            
            num1 = screenP.textContent;
            
        } else {
            screenP.textContent += num;
            
            num1 = screenP.textContent;
            
        }
        // input of num2 or num1 after an operation
    } else if (operator == '+' || operator == '*' || operator == '/' || operator == '-' || operator == '*%') {
        if (equalSign == 'off') {
            if (num2 == undefined) {
                screenP.textContent = num;
                num2 = screenP.textContent;
                
            } else {
                screenP.textContent += num;
                num2 = screenP.textContent;
                
            }
        } else if (equalSign == 'on') {
            screenP.textContent = num;
            num1 = screenP.textContent;

            
            operator = 'n';
        }


        
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
    equalSign = 'off';
    num2 = undefined
}

// equal sign 
const equalBtn = document.querySelector('#btn-equal');
equalBtn.addEventListener('click', () => solve(num1, operator, num2));

function solve(a, operator, b) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    switch (operator) {
        case '*':
            num1 = num1 * num2;
            
            break;
        case '-':
            num1 = num1 - num2;
            
            break;
        case '+':
            num1 = num1 + num2;
            
            break;
        case '/':
            if (num2 == 0) {
                num1 = 0;
            } else {
                num1 = num1 / num2;
            }

            
            break;
        case '*%':
            
            num1 = num1 / 100;
            
            num1 = num1 * num2;
            
            break;
    }

    

    screenP.textContent = parseFloat(num1.toFixed(4));
    equalSign = 'on';
    changeNum(num1, operator, num2);
    return num1;

}

function changeNum(newValueNum1, newValueOperator, newValueNum2) {
    num1 = newValueNum1.toString();
    if (num2 !== undefined) {
        num2 = newValueNum2.toString();
    }

}


// point button 

const pointBtn = document.querySelector('#btn-point');
pointBtn.addEventListener('click', ()=> pressPointButton())
function pressPointButton(){
    screenP.textContent = screenP.textContent + '.';
    if (operator == '+' || operator == '*' || operator == '/' || operator == '-' || operator == '*%') {
        num2 = parseInt(screenP.textContent);
        
    } else {
        num1 = parseInt(screenP.textContent);
        
    }
}

// AC button and reset function

function resetCalculator() {
    num1 = undefined;
    num2 = undefined;
    operator = 'n';
    equalSign = undefined;
    screenP.textContent = 0;
}

const btnAC = document.querySelector('#btn-ac');
btnAC.addEventListener('click', () => resetCalculator());

// +/- button
const btnChange = document.querySelector('#btn-change');
btnChange.addEventListener('click', function () {
    if (screenP.textContent == num1) {
        screenP.textContent = -num1;
        num1 = -num1;
    } else if (screenP.textContent == num2) {
        screenP.textContent = -num2;
        num2 = -num2;
    }
});


// keyboard 
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'Delete':
            resetCalculator();
            break;
        case '%':
            chooseOperator('/');
            break;
        case '/':
            chooseOperator('*%');
            break;
        case '7':
            inputNumber(7);
            break;
        case '8':
            inputNumber(8);
            break;
        case '9':
            inputNumber(9);
            break;
        case '*':
            chooseOperator('*');
            break;
        case '4':
            inputNumber(4);
            break;
        case '5':
            inputNumber(5);
            break;
        case '6':
            inputNumber(6);
            break;
        case '-':
            chooseOperator('-');
            break;
        case '1':
            inputNumber(1);
            break;
        case '2':
            inputNumber(2);
            break;
        case '3':
            inputNumber(3);
            break;
        case '+':
            chooseOperator('+');
            break;
        case '0':
            inputNumber(0);
            break;
        case '.':
            pressPointButton();
            break;
        case 'Enter':
            solve(num1, operator, num2);
            break;
    }
})


// change opacity on click 
const allButtons = document.querySelectorAll('.keyboard-button');

allButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.opacity = 0.5;
    });
    button.addEventListener('mouseout', () => {
        button.style.opacity = 1;
    });
    button.addEventListener('mouseup', () => {
        button.style.opacity = 1;
    });
});
