//document.getElementById("firstNumber").value;
//document.getElementById("SecondNumber").value;
let result = document.getElementById("result");
let myButton = document.getElementById("button");
// "click" event listener attached

myButton.addEventListener("click", function () {
  const firstValue = document.getElementById("firstNumber").value;
  const secondValue = document.getElementById("secondNumber").value;
  const operator = document.getElementById("operator").value;

  let numberOne = parseInt(firstValue);
  let numberTwo = parseInt(secondValue);
  let calculation = "";
  switch (operator) {
    case "+":
      console.log(numberOne + numberTwo);
      calculation = numberOne + numberTwo;
      break;
    case "-":
      console.log(numberOne - numberTwo);
      calculation = numberOne - numberTwo;
      break;
    case "/":
      console.log(numberOne / numberTwo);
      calculation = numberOne / numberTwo;
      break;
    case "*":
      console.log(numberOne * numberTwo);
      calculation = numberOne * numberTwo;
      break;
    default:
      console.log("Invalid operator");
  }

  result.innerText = `Result: ${calculation}`;
  document.getElementById("firstNumber").value = 0;
  document.getElementById("secondNumber").value = 0;
});
