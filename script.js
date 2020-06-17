// initial variable declarations
var qTitle = document.getElementById("quizTitle");
var qContent = document.getElementById("quizContent");
var nameText = document.getElementById("name-text");
var userName = '';
var nameForm = document.getElementById("name-form");
var scoreBrd = document.getElementById("scoreboard");
// setting initial value of scoreBrd to display:none 
// scoreBrd.display = "none";
var score = 0;
var savedScores = '';
var qScoreTotal = document.getElementById("totalScore");
var qTimeLeft = document.getElementById("timeLeft");
var startBox = document.getElementById("startBox");
var qCounter = 0;
// var clearQ = (qContent.innerHTML=''); doesn't work, sets both to the final '' pair. need to sub in? or just reuse the same chunk of code?
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
},{
    question: "How much wood Could a wood Chuck Chuck if a wood Chuck could chuck wood?",
    answer: ["all the wood", "most of the wood", "some of the wood", "but... they don't!" ],
    correctAnswer: "all the wood" 
},{
    question: "The snippet event.stopPropagation() would be used to:",
    answer: ["Keep the bamboo from takin' over the yard", "Generating an ordered List", "Preventing a Javascript action from bubbling up to its parent", "Preventing a for loop from running too many times" ],
    correctAnswer: "Preventing a Javascript action from bubbling up to its parent" 
},{
    question: "True or false: An Array is a speciazed type of object",
    answer: ["T", "F",],
    correctAnswer: "T" 
},{
    question: "Since it's bad and we should avoid it, what is shadowing?",
    answer: ["Using a common global key as a variable reference", "Adding a shadow effect in CSS", "Having a second, out of date bootstrap CDN link after your up-to-date one", "Making dog shapes in front of a candle when the power goes out" ],
    correctAnswer: "Using a common global key as a variable reference" 
}]
// +++++++++++++++++++++++++++game over function, including scoreboard show++++++++++++++++++++++++++++++++++++

function gameOver(){
    // show scoreboard
    scoreBrd.display = "block";
    // hide questions 
    qContent.innerHTML='GAME OVAH';
}

// =================================scoreboard render function================================================ 
function renderScoreBrd (){
    for (i = 0; i<savedScores.length; i++) {

    }
}

// ====================between these separators lives setTime() the time function=====================================================================================================
var secondsLeft = 45;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    qTimeLeft.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      gameOver();
      qTimeLeft.textContent = "0";
    }

  }, 1000);
}




// ==========the following function will display question at index qCounter of the myQ array====================

function dispQuestion(){
    // showing quiz questions  
    var showQ = document.createElement("div");
    showQ.setAttribute("class", "row");
    showQ.setAttribute("class", "h2");
    showQ.textContent = myQ[qCounter].question;
    qContent.appendChild(showQ);

    // the forloop below generates a button for each possible answer for item of myQ at index [qCounter].
    for (ii=0; ii<myQ[qCounter].answer.length; ii++) {
        // showing quiz answer possiblities 
        var aBtn = document.createElement("button");
        aBtn.setAttribute("class", "row")
        aBtn.textContent = myQ[qCounter].answer[ii];
        qContent.appendChild(aBtn);
    } 
    console.log(qCounter);
} 
      

//========================START function start() definition====================================================
var startBtn = document.createElement("button");
startBtn.setAttribute("class", "btn-lg");
startBtn.textContent = "Ready to Begin?"
startBox.appendChild(startBtn);

startBtn.addEventListener("click", function(){
    if (nameText.value !== '') {
        startBox.innerHTML = '';
        setTime();
        // have it fischer-yates shuffle the array of questions HERE 
        dispQuestion();
        userName = nameText.value;
        
    } else alert("come on, we want yer name!");
})

// ======================EVENT HANDLING FOR CLICKING BUTTONS, RIGHT OR WRONG===============================
// =============================ALSO HANDLES G/O DUE TO QUESTIONS END======================================
qContent.addEventListener("click", function(event) {
    event.preventDefault();

    if (event.target.matches("button")) {
        if (event.target.textContent === (myQ[qCounter].correctAnswer)) {
            score+=5;
            qCounter++;   
        } 
        else {
            secondsLeft-=5;
            qCounter++;    
        }
        if (qCounter === myQ.length) {
            gameOver();
        } else {
            qContent.innerHTML=''
            dispQuestion();
        }
        qScoreTotal.textContent= score;
    }
})

// TODO:WHEN I click the start button
// TODO:WHEN I answer a question
// TODO:THEN a timer starts
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