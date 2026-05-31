let score = {
  win: 0,
  lost: 0,
  tie: 0,
  displayScore: function () {
    return `Win: ${score.win} - Tie: ${score.tie} - Lost: ${score.lost}`;
  },
};

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
  alert(
    `You have chosen ${userMove}. Computer choice is ${computerChoice}.
${resultMsg}
${score.displayScore()}`,
  );
}
