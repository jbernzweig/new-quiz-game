let body = document.body;
let h1El = document.createElement("h1");
let quizBox = document.createElement("div");
let timerBox = document.createElement("div")

quizBox.setAttribute("id", "quizBox");
questionBox = document.createElement("div");
questionBox.setAttribute("id", "questionBox");
let answers = document.createElement("div");

const startButton = document.createElement("button");
startButton.innerHTML = "Start";

h1El.textContent = "Welcome to the Coding Quiz";
answers.textContent = "Answers";
questionBox.textContent = qList[0].question;

quizBox.appendChild(h1El);

body.appendChild(quizBox);
quizBox.appendChild(questionBox);

quizBox.appendChild(answers);
quizBox.appendChild(startButton)

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
answers.setAttribute("style", "font-size:25px; text-align:center;");

let time = qList.length*15;
let timer;


const clockTick = () => {

}
const startQuiz = () => {
    timer = setInterval(countDown, 1000);
    
}
startButton.onclick=startQuiz;