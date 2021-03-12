let firstValue = parseInt(prompt("Type first value"));
let operator = prompt("Type an operator");
let secondValue = parseInt(prompt("type second value"));

//   if (operator == "+") {
//     console.log(firstValue + secondValue);
//   } else if (operator == "-") {
//     console.log(firstValue - secondValue);
//   } else {
//     console.log("there is an error");
//   }

switch (operator) {
  case "+":
    console.log(firstValue + secondValue);
    break;
  case "-":
    console.log(firstValue - secondValue);
    break;
  case "*":
    console.log(firstValue * secondValue);
    break;
  case "/":
    console.log(firstValue / secondValue);
    break;
  default:
    console.log("Invalid operator");
}
