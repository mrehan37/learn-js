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
      return "User Won";
    } else if (computerMove === "Bat") {
      return `It's a tie`;
    } else if (computerMove === "Stump") {
      return "Computer won";
    }
  }
  // Ball Case
  else if (userMove === "Ball") {
    if (computerMove === "Ball") {
      return `It's a tie`;
    } else if (computerMove === "Bat") {
      return "Computer won";
    } else if (computerMove === "Stump") {
      return "User won";
    }
  }
  // Stump Case
  else if (userMove === "Stump") {
    if (computerMove === "Ball") {
      return "Computer Won";
    } else if (computerMove === "Bat") {
      return `User won`;
    } else if (computerMove === "Stump") {
      return `It's a tie`;
    }
  }
}

function showResult(userMove, computerMove, resultMsg) {
  alert(
    `You have chosen ${userMove}. Computer choice is ${computerChoice} and ${resultMsg}`,
  );
}
