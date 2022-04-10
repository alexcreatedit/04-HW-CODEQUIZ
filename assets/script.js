// Varaibles set
var titleEl = document.getElementById('title');
var startButton = document.getElementById('startBtn');
var timerEl = document.getElementById('timer-count');
var questions = document.getElementById('questions').style.display = 'none';
var timer = "";
var timerCount = "";

startButton.addEventListener('click', startCodeQuiz);

function startCodeQuiz() {
    startButton.style.display = 'none';
    timerCount = 60;
    console.log('Started');

    if(startCodeQuiz = 'none'){
        titleEl.style.display = 'none';

        startTimer()
    }
}

function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = timer;
      console.log(timerCount);
    }, 1000);
  }