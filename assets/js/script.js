const counterEl = document.getElementById("counter");
const start = document.getElementById("start");
const welcome = document.getElementById("welcome");
const question = document.getElementById("question");
const optionA = document.getElementById("A");
const optionB = document.getElementById("B");
const optionC = document.getElementById("C");
const optionD = document.getElementById("D");
const answer = document.getElementById("answer");
const quiz = document.getElementById("quiz-content");



//our questions
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        optionA: "1. strings",
        optionB: "2. booleans",
        optionC: "3. alerts",
        optionD: "4. numbers",
        answer: "3. alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with _________.",
        optionA: "1. quotes",
        optionB: "2. curly brackets",
        optionA: "3. parenthesis",
        optionD: "4. square brackets",
        answer: "3. parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store ___________.",
        optionA: "1. numbers and strings",
        optionB: "2. other arrays",
        optionC: "3. booleans",
        optionD: "4. all of the above",
        answer: "4. all of the above"
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        optionA: "1. JavaScript",
        optionB: "2. terminal/bash",
        optionC: "3. for loops",
        optionD: "4. console.log",
        answer: "4. console.log"
    },
    {
        question:"String values must be enclosed within ________ when being assigned to variables",
        optionA: "1. commas",
        optionB: "2. curly brackets",
        optionC: "3. quotes",
        optionD: "4. parenthesis",    
        answer: "3. quotes"
    },
]


let qQuestion = 0;

function showQuestions() {
    // const quiz_question = document.querySelector(".quiz_question");
    // let selectedQuestion = "<h2>" + question[0].question + "</h2>";
    // quiz_question.innerHTML = selectedQuestion;
    let selectedQuestion = questions[qQuestion];

    //for (var i=0; i<question.length; i++) {
    question.innerHTML = "<h2>" + selectedQuestion.question + "</h2>";
    optionA.innerHTML = selectedQuestion.optionA;
    optionB.innerHTML = selectedQuestion.optionB;
    optionC.innerHTML = selectedQuestion.optionC;
    optionD.innerHTML = selectedQuestion.optionD;
    //}
}

start.addEventListener("click", startQuiz);

//Start Quiz
function startQuiz() {
    welcome.style.display = "none" //hide start block
    countdown();
    showQuestions();
    quiz.style.display = "block"; //show questions
}

//timer
var timeLeft = 60;

function countdown() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            counterEl.innerHTML = timeLeft;
            timeLeft--;
        } else if (timeLeft === 0) {
            alert("GAME OVER.");
        }
    }, 1000)
}

//incorrect answer

//check answer
function checkAnswers(answer) {
    if (answer === questions[q].answer) {
        answer.innerHTML = "Correct!";
    } else {
        answer.innerHTML = "Wrong";
        count = count - 5;
    }
}