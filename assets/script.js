// Varaibles set
var titleEl = document.getElementById('title');
var startButton = document.getElementById('startBtn');
var timerEl = document.getElementById('timer-count');
var question0 = document.getElementById('question0').style.display = 'none';
var question1 = document.getElementById('question1').style.display = 'none';
var question2 = document.getElementById('question2').style.display = 'none';
var question3 = document.getElementById('question3').style.display = 'none';
var timer = "";
var timerCount = "";

startButton.addEventListener('click', startCodeQuiz);

function startCodeQuiz() {
    startButton.style.display = 'none';
    timerCount = 60;
    console.log('Started');

    if (startCodeQuiz = 'none') {
        titleEl.style.display = 'none';

        startTimer()
    }
}

function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = ("Time:" + timerCount + "s");
        askQuestions();
        
        console.log(timerCount);

        if (timerCount >= 0) {
            // Tests if win condition is met
            if (isWin && timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                winGame();
            }
        }
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

//function to trigger questions
function askQuestions() {
    question0 = document.getElementById("question0");
    if (question0.style.display === "none") {
      question0.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//function for winning
function winGame(){

}

//function for losing
function loseGame(){

}