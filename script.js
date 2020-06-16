var qTitle = document.getElementById("quizTitle");
var qContent = document.getElementById("quizContent");
var score = 0;
var qScoreTotal = document.getElementById("totalScore");
var qTimeLeft = document.getElementById("timeLeft");


var myQ = [{
    question: "The DOM in reference to a webpage refers to:",
    answer: ["Domino's. MMMM greasy.","dominos: the table game","Dom perignon","Document Object Model"],
    correctAnswer: "Document Object Model"
},{
    question: "True or False: You can't put an Object inside an Array.",
    answer: ["T", "F"],
    correctAnswer: "F"
},{
    question: "Gummy Bears Are:",
    answer: ["The Best!", "The Worst!", "Something about cat pajamas" ],
    correctAnswer: "The Best!"
},{
    question: "This basic language is often considered the 'muscle' of the web experience",
    answer: ["HTML", "Javascript", "Bananarama", "CSS" ],
    correctAnswer: "Javascript" 
}]

// ====================between these separators lives setTime() the time function=============
var secondsLeft = 45;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    qTimeLeft.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Game Over");
      qTimeLeft.textContent = "";
    //   change game over alert to gameOver() {fire clearQ, change display property of leaderboard to block,}
    }

  }, 1000);
}
//  pressing the start button should call setTime, 
setTime();
// ===========================================TIMER function END================================

//======================================START function start() definition begin====================== 
// 

// ==========the following function will display question at index 0 of the myQ array================

    function dispQuestion(){
        // possibly extend to additional forloop? for (nn=0, nn<myQ.length nn++). 
        // set a var that is equal to current question.
        
        // the forloop below generates a button for each possible answer for item of myQ at index [0]
        for (ii=0; ii<myQ[1].answer.length; ii++) {
        qTitle.textContent = myQ[1].question;
        var aBtn = document.createElement("button");
        aBtn.setAttribute("class", "row")
        aBtn.textContent = myQ[1].answer[ii];
        qContent.appendChild(aBtn);
    } 

    }
dispQuestion()
// now that it will show a question, want to randomize it out of the array, so find a way to link that 0 index to index n? 
// =========================================dispQuestion function END==========================================

// the following event listener handles the cases of user selecting right or wrong answers.
qContent.addEventListener("click", function(event) {
    event.preventDefault();
    
    if (event.target.matches("button")) {
        if (event.target.textContent === (myQ[1].correctAnswer)) {
            console.log("bananas");
            score+=5;
            let clearQ = (qContent.innerHTML = "") && (qTitle.textContent = "");
            // dispQuestion();
        } 
        else {
            secondsLeft-=5;
            let clearQ = (qContent.innerHTML = "") && (qTitle.textContent = "");
            // used twice Here , put this wayyy up at beginning, then generate start button to fill, THEN do an event listener/click for 
            // dispQuestion();
        }
        qScoreTotal.textContent= score;
    }
})

 
// TODO: GIVEN I am taking a code quiz
// TODO:THEN a timer starts
 //TODO:and I am presented with a question
// TODO:WHEN I answer a question
// TODO:WHEN I click the start button
        // make a start btn in js, put in qContent
        // have it fire the timer function,
        // hide itself (display:none)
// TODO:THEN I am presented with another question
        // make this the result of quiz page randomization of fill from array of properties. need 4 buttons, and use form submission and reset block.
// TODO:WHEN I answer a question incorrectly THEN time is subtracted from the clock
// TODO:WHEN all questions are answered or the timer reaches 0
        // set game over message and conditions in single function on page.
// TODO:THEN the game is over
// TODO:WHEN the game is over
// TODO:THEN I can save my initials and score
        // make score table show up and hide normally


        // current issues to resolve - refreshing or changing questions doesn't seem to change question text
        // need to make scoreboard.