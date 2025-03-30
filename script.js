//My little baby calculatorinator :3
let calcNums = function () {
  let calcNum1 = Number(document.getElementById("calc-num1").value);
  let calcNum2 = Number(document.getElementById("calc-num2").value);
  let calcOperator = document.getElementById("calc-operator").value;
  let calcOutput = undefined;
  if (
    calcOperator === "+" &&
    typeof calcNum1 === "number" &&
    typeof calcNum2 === "number"
  ) {
    calcOutput = calcNum1 + calcNum2;
    return (document.getElementById("calc-output").innerHTML = calcOutput);
  } else if (
    calcOperator === "-" &&
    typeof calcNum1 === "number" &&
    typeof calcNum2 === "number"
  ) {
    calcOutput = calcNum1 - calcNum2;
    return (document.getElementById("calc-output").innerHTML = calcOutput);
  } else if (
    calcOperator === "*" &&
    typeof calcNum1 === "number" &&
    typeof calcNum2 === "number"
  ) {
    calcOutput = calcNum1 * calcNum2;
    return (document.getElementById("calc-output").innerHTML = calcOutput);
  } else if (
    calcOperator === "/" &&
    typeof calcNum1 === "number" &&
    typeof calcNum2 === "number"
  ) {
    calcOutput = calcNum1 / calcNum2;
    return (document.getElementById("calc-output").innerHTML = calcOutput);
  } else if (
    calcOperator === "%" &&
    typeof calcNum1 === "number" &&
    typeof calcNum2 === "number"
  ) {
    calcOutput = calcNum1 % calcNum2;
    return (document.getElementById("calc-output").innerHTML = calcOutput);
  } else {
    return (document.getElementById("calc-output").innerHTML = "ERROR...");
  }
};

//My little baby stringconcatenatorinator :3
