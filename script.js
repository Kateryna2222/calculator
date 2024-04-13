const display = document.querySelector('.display'); 

const values = Array.from(document.querySelectorAll('button'));

const add = document.querySelector('.more')

function replaceToMath(element) {
    element = element.replace('÷', '/').replace('\u00D7','*');
    element = element.replace('²', '**2').replace('√', 'Math.sqrt');
    element = element.replace('sin', 'Math.sin').replace('cos', 'Math.cos').replace('tg', 'Math.tan');
    return element;
}

values.forEach(item => item.addEventListener('click', (e) => {

    if(add !== e.target){
        if(e.target.id === 'deleteAll'){
            display.innerText = 0;
        }
        else if(e.target.id === 'deleteLast'){
            display.innerText.length > 1? display.innerText = display.innerText.slice(0,-1) : display.innerText = '0'
        }
        else if(e.target.id === 'result'){
            const expression = replaceToMath(display.innerText);
            display.innerText = ((eval(expression)) / Math.ceil((eval(expression)))) !== 1? parseFloat(eval(expression).toFixed(5)) : (eval(expression))
        }
        else if (e.target.id === 'percent') {
            const percentValue = parseFloat(display.innerText) / 100;
            display.innerText = percentValue.toFixed(3);
        }
        else{
            if (display.innerText === '0' && e.target.innerText !== '.') {
                display.innerText = ''; 
            }
            display.innerText += e.target.innerText; 
        }
    }

}));


function addNewKeyboard(){
    if(window.innerWidth > 1000){
        if(addKeyboard.style.display === 'block'){
            addKeyboard.style.display = 'none'
        }
        else{
            addKeyboard.style.display = 'block'
        }
    }
}

add.addEventListener('click', addNewKeyboard)


