let body = document.body;
let h1El = document.createElement("h1");
let quizBox = document.createElement("div");
let timerBox = document.createElement("div");
let questionIndex=0; 
let currentAnswer, currentQuestion;


quizBox.setAttribute("id", "quizBox");
questionBox = document.createElement("div");
questionBox.setAttribute("id", "questionBox");
let answerBox = document.createElement("div");

const startButton = document.createElement("button");
startButton.innerHTML = "Start";

h1El.textContent = "Welcome to the Coding Quiz";
quizBox.appendChild(timerBox);
quizBox.appendChild(h1El);

body.appendChild(quizBox);
quizBox.appendChild(questionBox);

quizBox.appendChild(answerBox);
quizBox.appendChild(startButton)

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// answerBox.setAttribute("style", "font-size:25px; text-align:center;");

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
    getQuestions();
    startButton.setAttribute("class", "hide");

}

const checkAnswer = (e) => {
    
}

const showChoices = (choices) => {
    let writeChoice
    choices.forEach((choice, index) => {
        let newDiv = document.createElement("div")
        const choiceButton = document.createElement("button");
        choiceButton.name = choice;
        quizBox.appendChild(newDiv)
        quizBox.appendChild(choiceButton)
        choiceButton.innerHTML = choice;
        choiceButton.onclick= () => {
            console.log(choiceButton.name)
            console.log(currentQuestion)
            if (choiceButton.name===currentQuestion.answer) {
                console.log('you got it!')
            } console.log('wrong answer')
        };
    }) 
}

const getQuestions = () => {
    currentQuestion=qList[questionIndex]
    questionBox.textContent = currentQuestion.question;
    answerBox.textContent = showChoices(currentQuestion.choices)
    
}

const showAnswer = () => {
    answerBox.textContent = "Answers";

}

const endQuiz = () => {
    clearInterval(timer);
    startButton.removeAttribute("class")
    time = qList.length*2
}

startButton.onclick=startQuiz;

