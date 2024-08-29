let userWinCount = 0;
let computerWinCount = 0;


const computerSelectionArray = ["ROCK", "PAPER", "SCISSOR"];


const userChoicePara = document.getElementById("user-choice");
const userWinCountPara = document.getElementById("user-win-count");

const compChoicePara = document.getElementById("comp-chioce");
const compWinCountPara = document.getElementById("comp-win-count");


const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorButton = document.getElementById("scissor-btn");

rockButton.addEventListener("click", () => handleClick("ROCK"));
paperButton.addEventListener("click", () => handleClick("PAPER"));
scissorButton.addEventListener("click", () => handleClick("SCISSOR"));


function handleClick(userChoice) {
  console.log("Users Choice is :" + userChoice);

  const randomIndex = Math.floor(Math.random() * 3);
  const computersChoice = computerSelectionArray[randomIndex];
  console.log("Computer choice is : " + computersChoice);



  userChoicePara.textContent = userChoice;
  compChoicePara.textContent = computersChoice;


  if (userChoice === computersChoice) {
    console.log("Draw");
  } else if (
    (userChoice === "ROCK" && computersChoice === "SCISSORS") ||
    (userChoice === "SCISSOR" && computersChoice === "PAPER") ||
    (userChoice === "PAPER" && compChoicePara === "ROCK")
  ) {
    console.log("User Won");
    userWinCount++;
    userWinCountPara.innerHTML = `Player: ${userWinCount}`;
  } else {
    console.log("Computer won");
    computerWinCount++;
    compWinCountPara.innerHTML = `Computer: ${computerWinCount}`;
  }

  if (computerWinCount === 5) {
    console.log(
      "computer won the tournament UserWinCount is " +
        userWinCount +
        "and computers score is " +
        computerWinCount
    );
  } else if (userWinCount === 5) {
    console.log(
      "Congratulations you won .... UserWinCount is " +
        userWinCount +
        "and computers score is " +
        computerWinCount
    );
  }
}
