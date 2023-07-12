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
quizBox.appendChild(timerBox);
quizBox.appendChild(h1El);

body.appendChild(quizBox);
quizBox.appendChild(questionBox);

quizBox.appendChild(answers);
quizBox.appendChild(startButton)

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
answers.setAttribute("style", "font-size:25px; text-align:center;");

let time = qList.length*2;
let timer;


const clockTick = () => {
    time--;
    timerBox.textContent=time;
    if (time<=0) {
        endQuiz();
    }
}

const startQuiz = () => {
    timer = setInterval(clockTick, 1000);
    timerBox.textContent=time;
    console.log(qList)
    startButton.setAttribute("class", "hide");
}

const endQuiz = () => {
    clearInterval(timer);
    startButton.removeAttribute("class")
    time = qList.length*2
}

startButton.onclick=startQuiz;

