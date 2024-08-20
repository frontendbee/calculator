const keyboardNumbers = document.querySelectorAll('.keyboard-numbers');
// keyboardNumbers.style.backgroundColor = 'purple'
let screenP = document.querySelector('#screen-p');
// screenP = '0';
let result;

function inputNumber(num){
    if(screenP.textContent == 0){
        // screenP = num;
        screenP.textContent = num;
        // document.appendChild(screenP);
        console.log('prova uno: '+ screenP.textContent)
    } else {
        screenP.textContent += num;
        // document.appendChild(screenP);
        console.log('prova due: '+ screenP.textContent)
    }
}

// const btn7 = document.querySelector('#btn-7');
// btn7.addEventListener('click', inputNumber());

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