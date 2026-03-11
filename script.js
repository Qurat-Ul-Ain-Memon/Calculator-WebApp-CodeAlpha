const display = document.getElementById('display');

let currentInput = '';
let lastInput = '';

function appendNumber(num) {
  currentInput += num;
  updateDisplay();
  lastInput = num;
}

function appendOperator(op) {
  if (['+', '-', '*', '/'].includes(lastInput)) {
    alert('Invalid input sequence!');
    return;
  }
  currentInput += op;
  updateDisplay();
  lastInput = op;
}

function appendDot() {
  if (currentInput.endsWith('.')) return;
  currentInput += '.';
  updateDisplay();
  lastInput = '.';
}

function clearDisplay() {
  currentInput = '';
  lastInput = '';
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
    lastInput = '';
  } catch (e) {
    display.value = 'Error';
    currentInput = '';
    lastInput = '';
  }
}

function updateDisplay() {
  display.value = currentInput || '0';
}
