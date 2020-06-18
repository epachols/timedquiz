// initial variable declarations
var qTitle = document.getElementById("quizTitle");
var qContent = document.getElementById("quizContent");
var nameForm = document.getElementById("name-form");
var nameText = document.getElementById("name-text");
var userName = '';
// setting initial value of scores, score storage, and scoreboard display
var scoreBrd = document.getElementById("scoreboard");
    scoreBrd.classList.add("hide");
var score = 0;
var endScore = {};
var savedScores = JSON.parse(localStorage.getItem("scorelist"));
if (!savedScores) {savedScores = [];} 
// var storedScoresReturn = JSON.parse({savedScores});
var qScoreTotal = document.getElementById("totalScore");
var qTimeLeft = document.getElementById("timeLeft");
var startBox = document.getElementById("startBox");
// question variables, including counter
var qCounter = 0;
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
    answer: ["Calling a function parameter by a previous global variable", "Adding a shadow effect in CSS", "Having a second, out of date bootstrap CDN link after your up-to-date one", "Making dog shapes in front of a candle when the power goes out" ],
    correctAnswer: "Calling a function parameter by a previous global variable" 
}]





// ++++++++++++++qShuffle() shuffles the question bank+++++++++++++++++++
function qShuffle() {
    // this will shuffle the questions with a fisher yates
}





// ======setTime() is the timer function, calls gameOver()===============
var secondsLeft = 45;
var timerInterval;
function setTime() {
    timerInterval = setInterval(function() {
    secondsLeft--;
    qTimeLeft.textContent = secondsLeft;

    if((secondsLeft === 0)||(qCounter === myQ.length)) {
      clearInterval(timerInterval);
      gameOver();
      qTimeLeft.textContent = "0";
    }

  }, 1000);
}
// dispQuestion() makes a series of elements for question object details
function dispQuestion(){
    // showing quiz questions  
    var showQ = document.createElement("div");
    showQ.setAttribute("class", "row h2");
    showQ.textContent = myQ[qCounter].question;
    qContent.appendChild(showQ);
    // the below loop makes a button for every possible answer
    for (ii=0; ii<myQ[qCounter].answer.length; ii++) {
        // showing quiz answer possiblities 
        var aBtn = document.createElement("button");
        aBtn.setAttribute("class", "row mx-5");
        aBtn.textContent = myQ[qCounter].answer[ii];
        qContent.appendChild(aBtn);
    } 
    console.log(qCounter);
} 
//=======================START make-n-place =============================
var startBtn = document.createElement("button");
startBtn.setAttribute("class", "btn-lg");
startBtn.textContent = "Ready to Begin?"
startBox.appendChild(startBtn);
// ---------------event handler for start button-------------------------- 
startBtn.addEventListener("click", function(){
    if (nameText.value !== '') {
        startBox.innerHTML = '';
        setTime();
        // have it fischer-yates shuffle the array of questions HERE 
        dispQuestion();
        userName = nameText.value;
        
    } else alert("come on, we want yer name!");
})
//=======Event Handler for button clicks during quiz=====================
qContent.addEventListener("click", function(event) {
    event.preventDefault();
    // give em points if they're right, take time away if wrong
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
//----------------------SCOREBOARD RENDERING f(x)-------------------------
function renderBoard() {
    // for each object in this array, 
    for (ii=0; ii<savedScores.length; ii++) {
    // make a row
    var row = document.createElement("div");
    row.setAttribute("class", "row border border-rounded rounded");
    scoreBrd.appendChild(row);
    // make a div classed col-md-8
    var nameCol = document.createElement("div");
    nameCol.setAttribute("class", "col col-md-8 bg-dark text-light text-right");
    nameCol.innerHTML = savedScores[ii].name;
    row.appendChild(nameCol);
    // add it to the row 
     
    // make a div classed col-md-4
    var scoreCol = document.createElement("div");
    scoreCol.setAttribute("class", "col col-md-4 bg-info text-dark");
    scoreCol.innerHTML = savedScores[ii].score + " points";
    row.appendChild(scoreCol);
    
    }
}
//++++++++++++++++++++++++GAME OVER f(x)+++++++++++++++++++++++++++++++++
function gameOver(){
    // bonus here for scoring well 
    if (score > 35){
    score += secondsLeft;
    alert(`Congrats! Adding the ${secondsLeft} seconds you had remaining to your score`)
    }
    // clearing interval so no double Game over
    clearInterval(timerInterval);
    // saving score and user name to local object
    endScore["name"]=userName;
    endScore["score"]=score;
    // pushing local object to savedScores[]
    savedScores.push(endScore);
    // nested function: sorting savedScores array
    savedScores.sort(function(a, b) {
        return b.score - a.score;
    });
    renderBoard();
    // storing stringified object to local storage to overwrite previous scoreboard list
    localStorage.setItem("scorelist", JSON.stringify(savedScores));
    
    console.log(savedScores);
    // show scoreboard
    scoreBrd.classList.remove("hide");
    // hide questions 
    qContent.innerHTML='GAME OVAH';
    // BONUS = try to make here an option where game over adds the remaining time as an integer to the score 
}
// TODO: RANDOM SHUFFLE OF QUESTION ARRAY AT START FUNCTION line 114
// TODO: change styling of created items from row, or make a row, make a button, append to fix styling issue. also fix y margin on buttons, 
// could also treat as a single column, and make/insert a <br> in between each one to make it pretty. maybe add class btn.
// TODO:play again button. (window.refresh)
// TODO:
// TODO: