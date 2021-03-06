// select all elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");
var initial = document.getElementById("initial");
var gameOver = false;

// create our questions
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choiceA: "strings",
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        answer: "C",
    },
    {
        question:
            "The condition in an if / else statement is enclosed within ____.",
        choiceA: "quotes",
        choiceB: "curly brackets",
        choiceC: "parentheses",
        choiceD: "square brackets",
        answer: "C",
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choiceA: "numbers and strings",
        choiceB: "other arrays",
        choiceC: "booleans",
        choiceD: "all of the above",
        answer: "D",
    },
    {
        question:
            "String values must be enclosed within ____ when being assigned to variables.",
        choiceA: "commas",
        choiceB: "curly brackets",
        choiceC: "quotes",
        choiceD: "parentheses",
        answer: "C",
    },
    {
        question:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceA: "JavaScript",
        choiceB: "terminal / bash",
        choiceC: "for loop",
        choiceD: "console.log",
        answer: "D",
    },
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 50;
const gaugeWidth = 150;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    renderProgress();
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
    progress.innerHTML =
        "<div class='prog'>question #" +
        (runningQuestion + 1) +
        " of " +
        questions.length +
        "</div>";
}
// counter render

function renderCounter() {
    counter.innerHTML = count;
    count--;

    if (count <= 0) {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
        gameOver = true;
    }
}

function checkAnswer(answer) {
    if (gameOver === true) {
        return;
    }
    if (answer == questions[runningQuestion].answer) {
        console.log(questions[runningQuestion]);
        score++;
        answerIsCorrect();
    } else {
        // answer is wrong
        console.log(questions[runningQuestion]);
        count -= 5;
        answerIsWrong();
    }

    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
        gameOver = true;
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById("result").textContent = "correct";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById("result").textContent = "wrong";
}

// score render
function scoreRender() {
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    var scorePerCent = Math.round((100 * score) / questions.length);
    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}

function writeScore() {
    var userInitial = document.getElementById("initial1").value;
    const scorePercent = Math.round((100 * score) / questions.length);
    var previousUser = localStorage.getItem("userInitials") || "welcome user";
    var highScore = localStorage.getItem("highScore") || 0;
    if (score > highScore) {
        localStorage.setItem("userInitials", userInitial);
        localStorage.setItem("highScore", score);
    }
}
var previousUser = localStorage.getItem("userInitials") || "welcome user";
var highScore = localStorage.getItem("highScore") || 0;

var localStorageDisplay = document.getElementById("store3");
localStorageDisplay.innerHTML =
    "<h5> User:" +
    previousUser +
    "</h5><h6>Previous high score:" +
    highScore +
    "</h6>";

