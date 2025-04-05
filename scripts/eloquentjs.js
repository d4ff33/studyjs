//Collapsinator, i stole this from w3 :3
const collapsibles = document.getElementsByClassName("collapsible");

for (let i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function () {
    this.classList.toggle("collapsed");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//My little baby twonumbercalculator-inator :3
const calcNums = () => {
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

//My little baby twostringconcatenator-inator :3
const concatStrings = () => {
  let string1 = document.getElementById("string1").value;
  let string2 = document.getElementById("string2").value;
  return (document.getElementById("concat-output").innerHTML =
    string1 + string2);
};

const section2 = {
  caught: 5 * 5,
  ten: 10,
  mood: ["light", "dark"],
  luigisDebt: 105,
};
