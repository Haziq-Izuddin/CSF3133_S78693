// Variables
let gameStarted = false;
let wins = 0;
let losses = 0;
let draws = 0;
let round = 0;
let results = [];

// Start the game
function startGame() {
    let name = document.getElementById("playerName").value;
    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }
    gameStarted = true;
    document.getElementById("result").innerHTML =
        "Welcome, " + name + "!";
    document.getElementById("startTime").innerHTML =
        "Game Started: " + new Date();
}

// Generate random computer choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Play one round
function playRound(playerChoice) {
    if (!gameStarted) {
        alert("Click Start Game first.");
        return;
    }
    let computerChoice = getComputerChoice();
    let resultText;

    // Update images
    document.getElementById("playerImg").src =
        playerChoice + ".png";
    document.getElementById("computerImg").src =
        computerChoice + ".png";

    // Determine winner
    if (playerChoice === computerChoice) {
        resultText = "Draw";
        draws++;
        document.getElementById("result").style.color = "gray";
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText = "Win";
        wins++;
        document.getElementById("result").style.color = "green";
    }
    else {
        resultText = "Lose";
        losses++;

        document.getElementById("result").style.color = "red";
    }

    // Display result
    document.getElementById("result").innerHTML =
        "You " + resultText + "!";

    // Update scoreboard
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    // Store result
    results.push(resultText);

    // Add to history table
    round++;

    document.getElementById("history").innerHTML +=
        "<tr>" +
        "<td>" + round + "</td>" +
        "<td>" + playerChoice + "</td>" +
        "<td>" + computerChoice + "</td>" +
        "<td>" + resultText + "</td>" +
        "</tr>";
}

// Show summary
function showSummary() {

    if (results.length === 0) {
        alert("No rounds played yet.");
        return;
    }

    let totalWins = 0;

    for (let i = 0; i < results.length; i++) {
        if (results[i] === "Win") {
            totalWins++;
        }
    }

    let percentage =
        Math.round((totalWins / results.length) * 100);
    alert(
        "You played " +
        results.length +
        " rounds and won " +
        percentage +
        "%"
    );
}

// Reset game
function resetGame() {
    wins = 0;
    losses = 0;
    draws = 0;
    round = 0;
    results = [];

    document.getElementById("playerName").value = "";
    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("playerImg").src = "rock.png";
    document.getElementById("computerImg").src = "rock.png";
    document.getElementById("history").innerHTML =
        "<tr>" +
        "<th>Round</th>" +
        "<th>You</th>" +
        "<th>Computer</th>" +
        "<th>Result</th>" +
        "</tr>";
    gameStarted = false;
}