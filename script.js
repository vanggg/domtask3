let result = document.getElementById("result");

function getValue(obj) {
  let inputNum = obj.innerHTML;

  if (inputNum == "=") {
    result.value = eval(result.value);
  } else if (inputNum == "C") {
    result.value = "0";
  } else if (inputNum == "AC") {
    result.value = "0";
  } else {
    if (result.value == "0") {
      result.value = inputNum;
    } else {
      result.value += inputNum;
    }
  }
}

// Function to handle keyup event
function handleKeyUp(event) {
  let key = event.key;

  if (key >= 0 && key <= 9) {
    // Numbers
    getValue({ innerHTML: key });
  } else if (key == "+" || key == "-" || key == "*" || key == "/") {
    // Operators
    getValue({ innerHTML: key });
  } else if (key.toLowerCase() == "c") {
    // Clear
    getValue({ innerHTML: "C" });
  } else if (key == "Enter") {
    // Equals sign
    getValue({ innerHTML: "=" });
  } else if (key == "Backspace") {
    // All Clear (AC)
    getValue({ innerHTML: "AC" });
  } else if (key == ".") {
    // Decimal point
    getValue({ innerHTML: "." });
  }
}

// Add event listener to document
document.addEventListener("keyup", handleKeyUp);
