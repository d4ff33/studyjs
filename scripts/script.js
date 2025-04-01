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
const clicker = {
  sfx: {
    woah: new Audio("../assets/clicker-sound-woah.mp3"),
    giggle: new Audio("../assets/clicker-sound-giggle.mp3"),
  },
  counter: { clicks: 0, timer: 15 },
  state: {
    isActive: false,
    isCounting: false,
  },
  ui: {
    seconds: document.getElementById("clicker-seconds-remaining"),
    gameover: document.getElementById("clicker-gameover-screen"),
    alien: document.getElementById("clicker-alien"),
  },
  game: {
    replay: function () {
      clicker.state.isActive = false;
      clicker.state.isCounting = false;
      clicker.ui.alien.style.top = "45%";
      clicker.ui.alien.style.left = "45%";
      clicker.ui.alien.style.width = "50px";
      clicker.counter.timer = 15;
      clicker.counter.clicks = 0;
      clicker.ui.seconds.value = clicker.counter.timer.toString();
      clicker.ui.gameover.style.pointerEvents = "none";
      clicker.ui.gameover.style.opacity = "0";
    },
    countdown: function () {
      clicker.state.isActive = true;
      let timer = setInterval(() => {
        console.log("bonbli penis", clicker.counter.timer);
        if (clicker.counter.timer > 0) {
          clicker.counter.timer--;
          clicker.ui.seconds.value = clicker.counter.timer.toString();
        } else if (clicker.counter.timer == 0) {
          clicker.sfx.woah.load();
          clicker.sfx.woah.play();
          clicker.ui.gameover.style.opacity = "1";
          clicker.ui.gameover.style.pointerEvents = "all";
          clearInterval(timer);
          clicker.state.isCounting = false;
        }
      }, 1000);
    },
    play: function () {
      const posXRandomize = Math.random() * 500;
      const posYRandomize = Math.random() * 500;
      const widthRandomize = Math.random() * 100 + 50;

      clicker.ui.alien.animate(
        [{ transform: "scale(2)" }, { transform: "scale(1)" }],
        {
          duration: 100,
          easing: "linear",
        }
      );

      const propertyRandomize = () => {
        clicker.ui.alien.style.width = widthRandomize + "px";
        clicker.ui.alien.style.top = posYRandomize + "px";
        clicker.ui.alien.style.left = posXRandomize + "px";
      };

      if (!clicker.state.isActive) {
        clicker.sfx.giggle.load();
        clicker.sfx.giggle.play();
        propertyRandomize();
        clicker.state.isActive = true;
        clicker.counter.clicks++;
        document.getElementById("clicker-click-count").value =
          clicker.counter.clicks;
        if (!clicker.state.isCounting) {
          clicker.game.countdown();
        }
      } else if (clicker.state.isActive && clicker.counter.timer >= 0) {
        clickerSoundGiggle.load();
        clickerSoundGiggle.play();
        propertyRandomize();
        clicker.counter.clicks++;
        document.getElementById("clicker-click-count").value =
          clicker.counter.clicks;
      }
    },
  },
};
