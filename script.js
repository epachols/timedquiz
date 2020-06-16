var qTitle = document.getElementById("quizTitle");
var qContent = document.getElementById("quizContent");
var qScoreTotal = document.getElementById("totalScore");
var qTimeLeft = document.getElementById("timeLeft");

var myQ = [{
    question: "The DOM in reference to a webpage refers to:",
    answer: ["Domino's. MMMM greasy.","dominos: the table game","Dom perignon","Document Object Model"],
    correctAnswer: "Document Object Model"
},{
    question: "You can't put an Object inside an Array",
    answer: ["True", "False"],
    correctAnswer: "False"
},{
    question: "Gummy Bears Are:",
    answer: ["The Best!", "The Worst!", "Something about cat pajamas" ],
    correctAnswer: "The Best!"
},{
    question: "This basic language is often considered the 'muscle' of the web experience",
    answer: ["HTML", "Javascript", "Bananarama", "CSS" ],
    correctAnswer: "Javascript" 
}]

// the following function will display question at index 0 of the myQ array
    function dispQuestion(){
    qTitle.textContent = myQ[0].question;
    for (ii=0; ii<myQ[0].answer.length; ii++) {
        var aBtn = document.createElement("button");
        aBtn.setAttribute("class", "row")
        aBtn.textContent = myQ[0].answer[ii];
        qContent.appendChild(aBtn);
    } 
    }
dispQuestion()
// now that it will show a question, need to randomize it out of the array,

// adding an event listener for the buttons, do event handling here
qContent.addEventListener("click", function(event) {
    event.preventDefault();

    if (event.target.matches("button")) {
        // check if event.target.textContent matches
    }
})


// var startBtn = document.createElement("button");
//     startBtn.textContent = "Let's begin now!"
//     startBtn.setAttribute("style", "padding:5px; text-align:center; align-self:center; ");
//     qTitle.appendChild(startBtn);
    
    // startBtn.addEventListener("click", quizStart()) ;
// make a quizStart() function that starts the timer, hides the start button, and pulls a random question using the dispQuestion()
 
// TODO: GIVEN I am taking a code quiz
    // make the container or col ID'd to quiz data, and do display property of js function contents. thereby, write a function that generates question from array of possible questions, it's primary property, and the buttons from "answer" keys which are objects with TF properties themselves, using content for buttons.  see if making it UL will randomize the list
// TODO:THEN a timer starts
    // make timer function (per question, and timer in between items)
 // TODO:and I am presented with a question
// TODO:WHEN I answer a question
// TODO:WHEN I click the start button
        // make a start btn in js, have it fire the timer function, use the speedread exercise as model
// TODO:THEN I am presented with another question
        // make this the result of quiz page randomization of fill from array of properties. need 4 buttons, and use form submission and reset block.
// TODO:WHEN I answer a question incorrectly THEN time is subtracted from the clock
         // set value of wrong answers to false, write an if user input submit content value = false, then timer -=5 seconds, might need integer process or just do milliseconds to make it easier
// TODO:WHEN all questions are answered or the timer reaches 0
        // set game over message and conditions in single function on page.
// TODO:THEN the game is over
// TODO:WHEN the game is over
// TODO:THEN I can save my initials and score
        // make score table show up and hide normally
