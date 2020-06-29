//Help:
//How can i format the timer to look nicer, aka add colon between the variables
//Inputting the correct values into their own array for storage
//Why is my correct and wrong answers not tallying right


//Timer
var secondsElapsed = 0;
var totalSeconds = 0;
var interval;
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");


function runClockCb() {
    secondsElapsed++

    minutesDisplay.textContent = Math.floor((totalSeconds - secondsElapsed) / 60);
    secondsDisplay.textContent = (totalSeconds - secondsElapsed) % 60;

    if (secondsElapsed >= totalSeconds) {
        clearInterval(interval);
    }
}

function startTimer() {
    var minutes = 3
    totalSeconds = minutes * 60
    secondsElapsed = 0;

    if (typeof interval !== "undefined") {
        clearInterval(interval);
        startTimer.preventDefault();
    }

    interval = setInterval(runClockCb, 1000);

}

function pauseTimer() {
    clearInterval(interval);
    startTimer.preventDefault();

}

playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer)


//Begin Questionaire logic

var questionList = [
    {
        "question": "Which is not a Greek of an option in finance?",
        "a": "Delta",
        "b": "Theta",
        "c": "Alpha",
        "d": "Kappa",
        "correct": "c",
        "userAnswer": null
    },
    {
        "question": "What is the difference between an American and European exercise type of option?",
        "a": "American can be exercised at any time, European is only at expiration.",
        "b": "European can be exercised at any time, American is only at expiration.",
        "c": "American options can be obtained worldwide, European are only in Europe.",
        "d": "None of the above.",
        "correct": "a",
        "userAnswer": null
    },
    {
        "question": "Which statement is not true?",
        "a": "Futures contracts allow fewer delivery options than forward contracts.",
        "b": "Futures contracts are marked to market.",
        "c": "Futures contracts are more liquid than forward contracts.",
        "d": "Futures contracts trade on a financial exchange.",
        "correct": "a",
        "userAnswer": null
    },
    {
        "question": "Which is not a common ETF?",
        "a": "SPY",
        "b": "MSFT",
        "c": "IWM",
        "d": "EEM",
        "correct": "b",
        "userAnswer": null
    },
    {
        "question": "What would make a standard call option in-the-money?",
        "a": "Strike price above the current market price of the underlier.",
        "b": "Strike price even with the current market price of the underlier.",
        "c": "Strike price below the current market price of the underlier.",
        "d": "None of the above.",
        "correct": "c",
        "userAnswer": null
    },
    {
        "question": "Sensitivity of an asset to market movement is know as:",
        "a": "CAPM",
        "b": "Beta",
        "c": "Variance",
        "d": "Standard Deviation",
        "correct": "b",
        "userAnswer": null
    },
    {
        "question": "What is composition of a bull call spread strategy?",
        "a": "Sell long call option @ strike above current market value; Buy long call option with higher strike than the first. Both have different expiration date.",
        "b": "Buy long call option @ strike above current market value; Sell long call option with higher strike than the first. Both have different expiration date.",
        "c": "Sell long call option @ strike above current market value; Buy long call option with higher strike than the first. Both have same expiration date.",
        "d": "Buy long call option @ strike above current market value; Sell long call option with higher strike than the first. Both have same expiration date.",
        "correct": "d",
        "userAnswer": null
    },
    {
        "question": "The maximum risk in a short put is:",
        "a": "Unlimited",
        "b": "Equal to the price of the stock minus the premium received",
        "c": "Equal to the price of the stock plus the premium recieved",
        "d": "None of the above",
        "correct": "b",
        "userAnswer": null
    },
    {
        "question": "Derivative instruments have the following advantage:",
        "a": "They help control risk",
        "b": "They have lower transaction costs than most other financial assets",
        "c": "They aid in keeping spot prices close to their true values",
        "d": "All of the above",
        "correct": "d",
        "userAnswer": null
    },
    {
        "question": "The following derivative instrument(s) usually trades on an organized exchange:",
        "a": "Swap contracts",
        "b": "Forward contracts",
        "c": "Option contracts",
        "d": "All of the above",
        "correct": "c",
        "userAnswer": null
    },

];

var questionTag = document.body.querySelector("#question");
var answerTagA = document.body.querySelector("#answer-a");
var answerTagB = document.body.querySelector("#answer-b");
var answerTagC = document.body.querySelector("#answer-c");
var answerTagD = document.body.querySelector("#answer-d");

var buttonA = document.body.querySelector("#button-a");
var buttonB = document.body.querySelector("#button-b");
var buttonC = document.body.querySelector("#button-c");
var buttonD = document.body.querySelector("#button-d");

var buttonSubmit = document.body.querySelector('#submit');

var score = document.body.querySelector("#score");

var scoreActual = 0
var questionIndex = 0;

function buttonHandler(event) {
    var button = event.target;
    var userAnswer = button.getAttribute("data-answer");
    var questionId = parseInt(button.getAttribute("data-question"));
    // console.log(button);
    // console.log(userAnswer);
    // console.log(questionId);
    questionList[questionId]["userAnswer"] = userAnswer;

    console.log(questionList[questionId]["userAnswer"]);
    console.log(questionList[questionId]["correct"]);

    if (questionList[questionId]["userAnswer"] === questionList[questionId]["correct"]) {
        scoreActual++
        questionIndex++;
        score.textContent = "You got it correct. Overall Score is " + scoreActual + "/10";
        setTimeout(function () {
            initializeQuestion();
            score.textContent = "";
            console.log(questionIndex);
            console.log(scoreActual);
        }, 2000);
    }
    else {
        questionIndex++;
        score.textContent = "You got it wrong. Overall Score is " + scoreActual + "/10";
        setTimeout(function () {
            initializeQuestion();
            score.textContent = "";
        }, 2000);
    }
    if (questionIndex === questionList.length) {

    }
}

buttonA.addEventListener("click", buttonHandler);
buttonB.addEventListener("click", buttonHandler);
buttonC.addEventListener("click", buttonHandler);
buttonD.addEventListener("click", buttonHandler);

function initializeQuestion() {
    console.log(questionList[questionIndex]);
    var wholeObj = questionList[questionIndex];
    var question = wholeObj.question;
    console.log(question);
    questionTag.textContent = question;
    questionTag.setAttribute("data-question", questionIndex);

    answerTagA.textContent = wholeObj.a;
    answerTagB.textContent = wholeObj.b;
    answerTagC.textContent = wholeObj.c;
    answerTagD.textContent = wholeObj.d;
    buttonA.setAttribute("data-question", questionIndex);
    buttonB.setAttribute("data-question", questionIndex);
    buttonC.setAttribute("data-question", questionIndex);
    buttonD.setAttribute("data-question", questionIndex);
}
initializeQuestion();

// Log the question
$("#addInitials").on("click", function (event) {
    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();
    //get the val inputed into the search box. id set by the line
    // <input type="text" id="topic-input">
    var topic = $("#name").val();
    console.log($("#name").val());
    console.log(event.target);
    var button = event.target;
    var answerObject = {
        answerT: scoreActual,
        initails: topic
    }
    console.log(answerObject);
    localStorage.setItem("score", JSON.stringify(answerObject));
    var dataStored = JSON.parse(localStorage.getItem("score"));
    console.log(dataStored);
})
