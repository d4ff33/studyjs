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
let gameActive = false;
let timerActive = false;
let countdown = 15;
const secondsLeft = document.getElementById("seconds-left");
const gameOver = document.getElementById("gameover-screen");
const randButton = document.getElementById("rand-button");

const replayGame = () => {
  gameActive = false;
  timerActive = false;
  randButton.style.top = "45%";
  randButton.style.left = "45%";
  randButton.style.width = "50px";
  countdown = 15;
  randButtonCounter = 0;
  secondsLeft.value = countdown.toString();
  gameOver.style.pointerEvents = "none";
  gameOver.style.opacity = "0";
};

const startCountdown = () => {
  timerActive = true;
  let timer = setInterval(() => {
    console.log("penis", countdown);
    if (countdown > 0) {
      countdown--;
      secondsLeft.value = countdown.toString();
    } else if (countdown == 0) {
      timerActive = false;
      alienWoah.load();
      alienWoah.play();
      gameOver.style.opacity = 1;
      gameOver.style.pointerEvents = "all";
      clearInterval(timer);
    }
  }, 1000);
};

const randButtonClick = () => {
  const randomPosNumX = Math.random() * 500;
  const randomPosNumY = Math.random() * 500;
  const randomWidth = Math.random() * 100 + 50;

  randButton.animate([{ transform: "scale(2)" }, { transform: "scale(1)" }], {
    duration: 100,
    easing: "linear",
  });

  const randomizeProperties = () => {
    randButton.style.width = randomWidth + "px";
    randButton.style.top = randomPosNumY + "px";
    randButton.style.left = randomPosNumX + "px";
  };

  if (gameActive == false) {
    alienGiggle.load();
    alienGiggle.play();
    randomizeProperties();
    gameActive = true;
    randButtonCounter++;
    document.getElementById("click-count").value = randButtonCounter;
    if (timerActive == false) {
      startCountdown();
    }
  } else if (gameActive == true && countdown > 0) {
    alienGiggle.load();
    alienGiggle.play();
    randomizeProperties();
    randButtonCounter++;
    document.getElementById("click-count").value = randButtonCounter;
  }
};
