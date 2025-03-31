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

//Click da alien game
let randButtonCounter = 0;
const alienGiggle = new Audio("alien-giggle.mp3");
const alienWoah = new Audio("alien-woah.mp3");
const randButtonClick = () => {
  const randButton = document.getElementById("rand-button");
  randButton.classList.remove("button-animation");
  const randomColorNum = Math.floor(Math.random() * 10) + 1;
  const randomPosNumX = Math.random() * 500;
  const randomPosNumY = Math.random() * 500;
  const randomFontSize = Math.random() * 100 + 1;
  const randPosX = () => {
    randButton.style.left = randomPosNumX + "px";
    randButton.style.fontSize = randomFontSize + "px";
  };
  const randPosY = () => {
    randButton.style.top = randomPosNumY + "px";
    randButton.style.fontSize = randomFontSize + "px";
  };
  if (randButtonCounter >= 29) {
    alienWoah.load();
    alienWoah.play();
    randButtonCounter = 30;
    document.getElementById("click-count").value = randButtonCounter;
  } else {
    alienGiggle.load();
    alienGiggle.play();
    if (randomColorNum == 1) {
      randButton.style.backgroundColor = "red";
      randButton.style.fontSize = randomFontSize + "px";

      randPosX();
      randPosY();
      setTimeout(() => {
        randButton.classList.add("button-animation");
      }, 1);
    } else if (randomColorNum == 2) {
      randButton.style.backgroundColor = "blue";
      randButton.style.fontSize = randomFontSize + "px";

      randPosX();
      randPosY();
      setTimeout(() => {
        randButton.classList.add("button-animation");
      }, 1);
    } else if (randomColorNum == 3) {
      randButton.style.backgroundColor = "blue";
      randButton.style.fontSize = randomFontSize + "px";

      randPosX();
      randPosY();
      setTimeout(() => {
        randButton.classList.add("button-animation");
      }, 1);
    } else if (randomColorNum == 4) {
      randButton.style.backgroundColor = "green";
      randButton.style.fontSize = randomFontSize + "px";

      randPosX();
      randPosY();
      setTimeout(() => {
        randButton.classList.add("button-animation");
      }, 1);
    } else if (randomColorNum == 5) {
      randButton.style.backgroundColor = "yellow";
      randButton.style.fontSize = randomFontSize + "px";

      randPosX();
      randPosY();
      setTimeout(() => {
        randButton.classList.add("button-animation");
      }, 1);
    } else if (randomColorNum == 6) {
      randButton.style.backgroundColor = "cyan";
      randButton.style.fontSize = randomFontSize + "px";

      randPosX();
      randPosY();
      setTimeout(() => {
        randButton.classList.add("button-animation");
      }, 1);
    } else if (randomColorNum == 7) {
      randButton.style.backgroundColor = "magenta";
      randButton.style.fontSize = randomFontSize + "px";

      randPosX();
      randPosY();
      setTimeout(() => {
        randButton.classList.add("button-animation");
      }, 1);
    } else if (randomColorNum == 8) {
      randButton.style.backgroundColor = "deeppink";
      randButton.style.fontSize = randomFontSize + "px";

      randPosX();
      randPosY();
      setTimeout(() => {
        randButton.classList.add("button-animation");
      }, 1);
    } else if (randomColorNum == 9) {
      randButton.style.backgroundColor = "chartreuse";
      randButton.style.fontSize = randomFontSize + "px";
      randPosX();
      randPosY();
      setTimeout(() => {
        randButton.classList.add("button-animation");
      }, 1);
    } else if (randomColorNum == 10) {
      randButton.style.backgroundColor = "brown";
      randButton.style.fontSize = randomFontSize + "px";
      randPosX();
      randPosY();
      setTimeout(() => {
        randButton.classList.add("button-animation");
      }, 1);
    }
    randButtonCounter++;
    document.getElementById("click-count").value = randButtonCounter;
  }
};
