const keyboardNumbers = document.querySelectorAll('.keyboard-numbers');
// keyboardNumbers.style.backgroundColor = 'purple'
let screenP = document.querySelector('#screen-p');
// screenP = '0';
let num1; //questo è un numero?

let operator = 'n';
let num2 = 2;

// numbers 

function inputNumber(num){
    console.log('value of operator: ' + operator)
    if(operator == 'n'){
        if(screenP.textContent == 0){
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
    } else if(operator == '+' || operator == '*' || operator == '/' || operator == '-'){
        screenP.textContent = num;
        num2 = parseInt(screenP.textContent);
        console.log(num1 + ' and ' + num2)
    }
    
}



const btn0 = document.querySelector('#btn-0');
btn0.addEventListener('click', ()=>inputNumber(0));

const btn1 = document.querySelector('#btn-1');
btn1.addEventListener('click', ()=>inputNumber(1));

const btn2 = document.querySelector('#btn-2');
btn2.addEventListener('click', ()=>inputNumber(2));

const btn3 = document.querySelector('#btn-3');
btn3.addEventListener('click', ()=>inputNumber(3));

const btn4 = document.querySelector('#btn-4');
btn4.addEventListener('click', ()=>inputNumber(4));

const btn5 = document.querySelector('#btn-5');
btn5.addEventListener('click', ()=>inputNumber(5));

const btn6 = document.querySelector('#btn-6');
btn6.addEventListener('click', ()=>inputNumber(6));

const btn7 = document.querySelector('#btn-7');
btn7.addEventListener('click', ()=>inputNumber(7));

const btn8 = document.querySelector('#btn-8');
btn8.addEventListener('click', ()=>inputNumber(8));

const btn9 = document.querySelector('#btn-9');
btn9.addEventListener('click', ()=>inputNumber(9));

// operators

const multiplicationBtn = document.querySelector('#btn-multiplication');
multiplicationBtn.addEventListener('click', ()=>chooseOperator('*'));

const subtractionBtn = document.querySelector('#btn-subtraction');
subtractionBtn.addEventListener('click', ()=>chooseOperator('-'));

const additionBtn = document.querySelector('#btn-addition');
additionBtn.addEventListener('click', ()=>chooseOperator('+'));

const divisionBtn = document.querySelector('#btn-division');
divisionBtn.addEventListener('click', ()=>chooseOperator('/'));

function chooseOperator(op){
    operator = op;
}

// equal sign 
const equalBtn = document.querySelector('#btn-equal');
equalBtn.addEventListener('click', solve);

function solve(num1, operator, num2){
    console.log(operator);
    console.log(typeof(num1))
    switch (operator){
        case '*':
            return num1 * num2;
        case '-':
            return num1 - num2;
        case '+':
            return num1 + num2;
        case '/':
            return num1 / num2;
    }
}
