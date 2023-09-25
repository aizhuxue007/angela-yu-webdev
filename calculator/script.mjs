import {FILOList} from './FILOList.js';
import { Calculator } from './Calculator.js';

// select the button elements
const display = document.getElementById("display");
const numBtns = document.querySelectorAll('.button__number');
const operationBtns = document.querySelectorAll(".operation")
const clearBtn = document.getElementById('clear');
const calcBtn = document.getElementById('calculate');
const refreshBtn = document.getElementById('refresh');
const signBtn = document.getElementById('sign');
const percentBtn = document.getElementsByClassName('fa-percent')[0];
const history = document.getElementById('history');


// history display queue
const historyList = new FILOList();

// resets display
const resetDisplay = () => {
    display.value = '';
};

const calculateExpression = (expression) => {
    let result;
    try {
      const evalFn = new Function(`return ${expression.replace(/\s/g, '')};`);
      result = evalFn();
    } catch (error) {
      console.log(error.message)
    }
    console.log(result);
    return result;
};
  

const addHistory = () => {
    const expression = display.value.replace('undefined', '');
    const result = calculateExpression(expression);
    historyList.push(expression + ' = ' + result);
    updateHistory();
};

const updateHistory = () => {
    let displayString = '';
    historyList.getList().forEach(str => {
        displayString += str + '\n';
    })
    history.value = displayString;
}

const clearHistory = () => {
    historyList.emptyList();
    history.value = '';
}

// add event listener for the number buttons and update display if clicked
numBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (display.value.length < 12) {
             display.value += button.textContent;
        }
    });
});

// add event listener for the operation buttons
operationBtns.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.value;
    });
});

// add event listener for the calcBtn
calcBtn.addEventListener('click', () => {
    addHistory();
    resetDisplay();
});

// add event listener for clearBtn
clearBtn.addEventListener('click', () => {
    clearHistory();
    resetDisplay();
});

refreshBtn.addEventListener('click', () => {
    display.value = historyList.pop().split(' ')[-1];
    updateHistory();
});

signBtn.addEventListener('click', () => {
    let value = display.value;
    if (!(value[0] === '-'))  {
        display.value = '-(' + display.value + ')';
    }
});

percentBtn.addEventListener('click', () => {
    let percentage = parseInt(display.value) * 0.01;
    display.value = (percentage);
});

let calc = new Calculator('5', '5*3');
console.log(calc)