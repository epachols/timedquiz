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

// I need to: upon page load, 

