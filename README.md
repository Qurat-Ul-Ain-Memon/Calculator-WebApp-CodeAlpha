# Web Calculator

A clean and responsive web-based calculator built using HTML, CSS, and JavaScript. This project performs basic mathematical operations while handling edge cases such as division by zero and invalid inputs, ensuring a smooth and reliable user experience.

## Project Overview

This calculator is designed to simulate the behavior of a real handheld calculator in the browser. It allows users to perform common arithmetic operations with proper error handling and input validation.

The goal of this project was to strengthen my understanding of:

- DOM manipulation
- JavaScript logic building
- Error handling
- Frontend structure using HTML and CSS

## Features

- Perform basic arithmetic operations:
  - Addition
  - Subtraction
  - Multiplication
  - Division
- Zero division handling – The calculator detects when a user tries to divide by zero and prevents invalid results.
- Input validation – Prevents invalid or malformed expressions from crashing the application.
- User-friendly interface – Clean layout designed with CSS for easy interaction.
- Real-time calculation logic – JavaScript dynamically processes user input and updates the display instantly.

## Error Handling

This calculator is designed to gracefully handle common calculation errors.

### Division by Zero
If a user attempts to divide a number by 0, the calculator displays an appropriate error message instead of returning an invalid result.

Example:  
10 ÷ 0 → Error: Cannot divide by zero

### Invalid Expressions
The application checks for incorrect expressions such as:

- Multiple operators
- Incomplete calculations
- Invalid characters

These are handled to ensure the application does not break or crash.

## Technologies Used

- HTML5 – Structure of the calculator
- CSS3 – Styling and layout
- JavaScript – Calculation logic and error handling

## Project Type
This project was created as part of the **CodeAlpha Web Development Internship**.

## Live Demo
[Visit Live Calculator](https://qurat-ul-ain-memon.github.io/codealpha-calculator-task/)
