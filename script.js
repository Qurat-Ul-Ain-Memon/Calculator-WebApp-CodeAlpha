const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    // Clear screen
    if (value === 'C') {
      currentInput = '';
      display.value = '';
      return;
    }

    // Calculate result
    if (value === '=') {
      try {
        display.value = eval(currentInput);
        currentInput = display.value;
      } catch {
        display.value = 'Error';
        currentInput = '';
      }
      return;
    }

    // Append numbers/operators
    currentInput += value;
    display.value = currentInput;
  });
});
