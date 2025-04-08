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
    alien: {
      htmlElement: document.getElementById("clicker-alien"),
      randomize: function () {
        const posXRandomize = Math.random() * 500;
        const posYRandomize = Math.random() * 500;
        const widthRandomize = Math.random() * 100 + 50;
        this.htmlElement.style.width = widthRandomize + "px";
        this.htmlElement.style.top = posYRandomize + "px";
        this.htmlElement.style.left = posXRandomize + "px";
      },
    },
  },
  game: {
    replay: function () {
      clicker.state.isActive = false;
      clicker.state.isCounting = false;
      clicker.ui.alien.htmlElement.style.top = "45%";
      clicker.ui.alien.htmlElement.style.left = "45%";
      clicker.ui.alien.htmlElement.style.width = "50px";
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
      clicker.ui.alien.htmlElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
        }
      });
      clicker.ui.alien.htmlElement.animate(
        [{ transform: "scale(2)" }, { transform: "scale(1)" }],
        {
          duration: 100,
          easing: "linear",
        }
      );
      if (!clicker.state.isActive) {
        clicker.sfx.giggle.load();
        clicker.sfx.giggle.play();
        clicker.ui.alien.randomize();
        clicker.state.isActive = true;
        clicker.counter.clicks++;
        document.getElementById("clicker-click-count").value =
          clicker.counter.clicks;
        if (!clicker.state.isCounting) {
          clicker.game.countdown();
        }
      } else if (clicker.state.isActive && clicker.counter.timer >= 0) {
        clicker.sfx.giggle.load();
        clicker.sfx.giggle.play();
        clicker.ui.alien.randomize();
        clicker.counter.clicks++;
        document.getElementById("clicker-click-count").value =
          clicker.counter.clicks;
      }
    },
  },
};

const ppClicker = {
  data: {
    click: {
      points: 0,
      cpsModifier: 1,
      cpsInterval: 1000,
      get cps() {
        return this.cpsInterval * this.cpsModifier;
      },
    },
    html: {
      pointsOutput: document.getElementById("ppClickerPointsOutput"),
      cpsOutput: document.getElementById("ppClickerCPSOutput"),
      anchor: document.getElementById("ppClickerAnchor"),
      settingsButton: document.getElementById("ppClickerSettingsButton"),
      settingsMenu: document.getElementById("ppClickerSettings"),
    },
    settings: {
      isActive: false,
    },
  },
  event: {
    shop: {},
    gameStart: function () {
      ppClicker.animation.click();
      ppClicker.event.cps();
      ppClicker.event.settings();
    },
    cps: function () {
      ppClicker.data.html.cpsOutput.textContent =
        ppClicker.data.click.cpsInterval / ppClicker.data.click.cps;
      let time = setInterval(() => {
        ppClicker.data.click.points++;
        ppClicker.data.html.pointsOutput.textContent =
          ppClicker.data.click.points;
        ppClicker.animation.cps();
      }, ppClicker.data.click.cps);
    },
    settings: function () {
      ppClicker.data.html.settingsButton.addEventListener("mousedown", () => {
        console.log("Settings clicked");
        if (!ppClicker.data.settings.isActive) {
          ppClicker.data.html.settingsMenu.style.display = "block";
          ppClicker.data.settings.isActive = true;
        } else if (ppClicker.data.settings.isActive) {
          ppClicker.data.html.settingsMenu.style.display = "none";
          ppClicker.data.settings.isActive = false;
        }
      });
    },
  },
  animation: {
    click: function (elements) {
      elements = [
        ppClicker.data.html.anchor,
        ppClicker.data.html.settingsButton,
      ];
      elements.forEach((element) => {
        element.addEventListener("mousedown", () => {
          if (element == ppClicker.data.html.anchor) {
            ppClicker.data.click.points++;
            ppClicker.data.html.pointsOutput.textContent =
              ppClicker.data.click.points;
          }
          element.animate(
            [{ transform: "scale(1)" }, { transform: `scale(0.9)` }],
            {
              duration: 100,
              easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
              composite: "add",
            }
          );
        });
      });
    },
    cps: function () {
      ppClicker.data.html.anchor.animate(
        [
          { transform: "translate(-50%, -50%) rotateZ(0deg)" },
          { transform: "translate(-50%, -50%) rotateZ(5deg)" },
          { transform: "translate(-50%, -50%) rotateZ(0deg)" },
          { transform: "translate(-50%, -50%) rotateZ(-5deg)" },
          { transform: "translate(-50%, -50%) rotateZ(0deg)" },
        ],
        {
          duration: 100,
          easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        }
      );
    },
  },
};

ppClicker.event.gameStart();
