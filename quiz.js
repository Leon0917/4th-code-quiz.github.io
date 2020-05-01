// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceC = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choiceA:"strings", 
      choiceB:"booleans", 
      choiceC:"alerts",
      choiceD:"numbers",
      answer: "alerts"
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choiceA: "quotes",
      choiceB: "curly brackets", 
      choiceC: "parentheses", 
      choiceD:"square brackets",
      answer: "parentheses"
    },
    {
      question: "Arrays in JavaScript can be used to store ____.", 
      choiceA: "numbers and strings",
      choiceB:"other arrays",
      choiceC:"booleans",
      choiceD:"all of the above",
      answer: "all of the above"
    },
    {
      question: "String values must be enclosed within ____ when being assigned to variables.",
      choiceA:"commas", 
      choiceB:"curly brackets", 
      choiceC:"quotes", 
      choiceD:"parentheses",
      answer: "quotes"
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choiceA:"JavaScript", 
      choiceB:"terminal / bash", 
      choiceC:"for loops", 
      choiceD:"console.log",
      answer: "console.log"
    }
  ];
  
  // create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150; 
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    // qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceC.innerHTML = q.choiceD;
}


start.addEventListener("click",startButton);

// start quiz
function startButton() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}
