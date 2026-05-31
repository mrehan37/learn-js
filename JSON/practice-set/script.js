let scoreStr = localStorage.getItem("score");
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        lost: 0,
        tie: 0,
      };
  score.displayScore = function () {
    return `Win: ${score.win} - Tie: ${score.tie} - Lost: ${score.lost}`;
  };
  showResult();
}

function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  let choice;
  if (randomNumber >= 0 && randomNumber <= 1) {
    choice = "Bat";
  } else if (randomNumber >= 1 && randomNumber <= 2) {
    choice = "Ball";
  } else {
    choice = "Stump";
  }
  return choice;
}

function getResult(userMove, computerMove) {
  let resultMsg;
  // Bat Case
  if (userMove === "Bat") {
    if (computerMove === "Ball") {
      score.win++;
      return "User Won";
    } else if (computerMove === "Bat") {
      score.tie++;
      return `It's a tie`;
    } else if (computerMove === "Stump") {
      score.lost++;
      return "Computer won";
    }
  }
  // Ball Case
  else if (userMove === "Ball") {
    if (computerMove === "Ball") {
      score.tie++;
      return `It's a tie`;
    } else if (computerMove === "Bat") {
      score.lost++;
      return "Computer won";
    } else if (computerMove === "Stump") {
      score.win++;
      return "User won";
    }
  }
  // Stump Case
  else if (userMove === "Stump") {
    if (computerMove === "Ball") {
      score.lost++;
      return "Computer Won";
    } else if (computerMove === "Bat") {
      score.win++;
      return `User won`;
    } else if (computerMove === "Stump") {
      score.tie++;
      return `It's a tie`;
    }
  }
}

function showResult(userMove, computerMove, resultMsg) {
  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".user-move").innerText = userMove
    ? `You have chosen ${userMove}`
    : "";
  document.querySelector(".computer-move").innerText = userMove
    ? `Computer choice is ${computerMove}`
    : "";
  document.querySelector(".result").innerText = resultMsg || "";
  document.querySelector(".score").innerText = score.displayScore();
}
