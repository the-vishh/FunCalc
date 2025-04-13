let displayValue = "0";
const display = document.getElementById("display");

function updateDisplay() {
  display.textContent = displayValue;
}

function appendToDisplay(value) {
  if (displayValue === "0" && value !== ".") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function backspace() {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = "0";
  }
  updateDisplay();
}

function calculate() {
  try {
    // Replace × with * for evaluation
    let expression = displayValue.replace(/×/g, "*");
    displayValue = String(eval(expression));

    // Handle decimal places to prevent long floating point numbers
    if (displayValue.includes(".")) {
      const parts = displayValue.split(".");
      if (parts[1].length > 8) {
        displayValue = parseFloat(displayValue).toFixed(8);
      }
    }

    // Check for division by zero
    if (displayValue === "Infinity" || displayValue === "-Infinity") {
      displayValue = "Error";
    }
  } catch (error) {
    displayValue = "Error";
  }
  updateDisplay();
}
