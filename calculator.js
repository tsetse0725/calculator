const numberBtns = document.getElementsByClassName("number");
const display = document.getElementById("display");
const equalBtn = document.getElementById("equal");
const addBtn = document.getElementsByClassName("addBtn")[0];
const minusBtn = document.getElementsByClassName("minusBtn")[0];
const multiplyBtn = document.getElementsByClassName("multiplyBtn")[0];
const divideBtn = document.getElementsByClassName("divideBtn")[0];
const clearBtn = document.getElementsByClassName("clearBtn")[0];
const decimalBtn = document.getElementsByClassName("decimalBtn")[0];

let operand1 = "";
let operand2 = "";
let operator = "";
let isNewInput = false;

const clearDisplay = () => {
  if (isNewInput) {
    display.innerText = "";
    isNewInput = false;
  }
};


for (const btn of numberBtns) {
  btn.addEventListener("click", () => {
    clearDisplay();
    if (!(btn.innerText === "0" && display.innerText === "0")) {
      display.innerText += btn.innerText;
    }
  });
}

const handleOperator = (op) => {
  if (operand1 && operator) {
    operand2 = display.innerText;
    let result = 0;

    switch (operator) {
      case "+":
        result = parseFloat(operand1) + parseFloat(operand2);
        break;
      case "-":
        result = parseFloat(operand1) - parseFloat(operand2);
        break;
      case "x":
        result = parseFloat(operand1) * parseFloat(operand2);
        break;
      case "÷":
        result = parseFloat(operand1) / parseFloat(operand2);
        break;
      default:
        console.log("Operation not work");
    }

    display.innerText = parseFloat(result.toFixed(7)).toString();
    operand1 = display.innerText;
    operand2 = "";
    operator = op;
  } else {
    operand1 = display.innerText;
    operator = op;
  }
  isNewInput = true;
};

addBtn.addEventListener("click", () => handleOperator("+"));
minusBtn.addEventListener("click", () => handleOperator("-"));
multiplyBtn.addEventListener("click", () => handleOperator("x"));
divideBtn.addEventListener("click", () => handleOperator("÷"));

equalBtn.addEventListener("click", () => {
  operand2 = display.innerText;
  let result = 0;

  switch (operator) {
    case "+":
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case "-":
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case "x":
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case "÷":
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
    default:
      console.log("Operation not work");
  }

  display.innerText = parseFloat(result.toFixed(7)).toString();
  operand1 = display.innerText;
  operand2 = "";
  operator = "";
  isNewInput = true;
});

clearBtn.addEventListener("click", () => {
  display.innerText = "";
  operand1 = "";
  operand2 = "";
  operator = "";
  isNewInput = false;
});

decimalBtn.addEventListener("click", () => {
  clearDisplay();
  if (!display.innerText.includes(".")) {
    display.innerText += ".";
  }
});
