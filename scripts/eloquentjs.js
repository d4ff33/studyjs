const exercises = {
  section2: {
    loopTriangle: function () {
      let string = "#";
      for (let i = 0; i < 7; i++) {
        console.log(string);
        string += "#";
      }
    },
    fizzBuzz: function () {
      for (i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
          console.log("FizzBuzz");
        } else if (i % 3 == 0) {
          console.log("Fizz");
        } else if (i % 5 == 0) {
          console.log("Buzz");
        } else {
          console.log(i);
        }
      }
    },
    chessBoard: function (width, height) {
      let string = "";
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          if ((y + x) % 2 == 0) {
            string += " ";
          } else {
            string += "#";
          }
        }
        string += "\n";
      }
      console.log(string);
    },
  },
};
