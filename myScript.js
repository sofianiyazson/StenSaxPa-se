/** Set score variables */
let humanScore = 0;
let compScore = 0;
let result = 'Start';

/** Show score */
function showScore() {

	document.getElementById("playerscore").innerText = humanScore;
	document.getElementById("compscore").innerText = compScore;	
	document.getElementById("result").innerText = result;
	
}

/** Start Game and output results */
function playGame(humanInput) {

    let humanSelection = humanInput.textContent;
    let compSelection = getCompSelection();
    let result = calcResult(humanSelection, compSelection);
	document.getElementById("vstext").innerText = humanSelection + ' VS ' + compSelection;
    showScore();
	
}

/** Computer Selection */
function getCompSelection() {

    const options = ['sten', 'påse', 'sax'];
    let compSelector = options[Math.floor(Math.random()*options.length)];
    return compSelector;

}

/** Determine game results */
function calcResult(human, comp) {

    if (human === comp) {
		result = 'Samma'
        return;
    } else if ((human === 'sten' && comp === 'sax') || (human === 'påse' && comp === 'sten') || (human === 'sax' && comp === 'påse')) {
	
	    humanScore += 1;	

		if (humanScore == 10){
		result = "Du har vunnit!";
		endgame();
		} else {
		result = 'Du vinner'
		return;
		}
        
    } else {
		compScore += 1;
		
		if (compScore == 10){
		result = 'Datorn har vunnit';
		endgame();
		} else { 
		result = 'Du förlorar'
		return;
		}
				
	}
	
}
/** End game */
function endgame(){
 
 		var ele = document.getElementById('startgame');
		ele.remove();	
		document.getElementById("endgame").style.display = "block";
		showScore();
		
 }