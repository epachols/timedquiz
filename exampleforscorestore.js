var strungScores = JSON.stringify({"adam":10, "evan":8})
// undefined
localStorage.setItem("scorelist", strungScores)
// undefined

// below is getting scorelist (from storage),, if there IS stuff, GO AHEAD, if there isn't stuff, give up
localStorage.getItem("scorelist")
// "{"adam":10,"evan":8}"
JSON.parse(localStorage.getItem("scorelist"))
// {adam: 10, evan: 8}

//*********/ once it comes back, set the savedscore var equal to the parsed out string (back to obj)
var savedScores = JSON.parse(localStorage.getItem("scorelist"))
// see above, if ther eis nothing in the string, give up per example in class notes
// undefined

// ***adding a new score to the Object, for saving later (sam being newperson)
savedScores["sam"]=100
// 100

// just a check to make sure I had it right 
savedScores
// {adam: 10, evan: 8, sam: 100}

// do the following for update scores
localStorage.setItem("scorelist", JSON.stringify(savedScores))
// undefined




// I need to: 

// DEAL WITH EDGE CASE OF SOMEONE CLICKING ON NONBUTTON FOR LISTENER. MAYBE MAKE IT DOCUMENT WIDE?

// set an empty object to saved Scores  **DONE**

// at end of round 
// 1. do the savedScores["nameuserenteredhere"]=score **DONE**
    // change that to be the user entered input and score **DONE**
// 3. or just localStorage.setItem("scorelist", JSON.stringify(savedScores)) **DONE**

// at beginning of game (when page loads)
// 1. retrieve stored scores **DONE**
// 2. include possibility of no scores. ***DONE**
function renderScoreBrd() {
    // Clear todoList element and update todoCountSpan
    scoreBrd.innerHTML = "";
    
  
    // Render a new scoreboard item ()
    for (var i = 0; i < todos.length; i++) {
     
    }
  }



  function init() {
    // Get savedscores from localStorage
    // Parsing the JSON string to an object
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedTodos !== null) {
      todos = storedTodos;
    }
}

for sorting an array

let array = [{},{},{}],
array.sort((a, b) => {
    return (a.property > b.property)
});
