console.log('sanity check');
//global variables
var turn = 0;
var fields = new Array(9).fill(1);; 
console.log(fields)
var board; 
console.log(board)
const winCombos = [//this are indexes of squares for winning combinations
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
]
var playField = document.querySelector('#structure');


playField.addEventListener('click', userTurn);


var theMessage = function(msg){
	document.getElementById('messages').textContent=msg;
	if (fields.length < 1){
		document.getElementById('messages').addEventListener('click', theGame)
	}
	return	
}

var playerMove =function(squareid){
	fields.pop()
	var moveX = document.getElementById(squareid).textContent='X';
	theMessage("O's turn now");
	console.log(squareid)
	board[squareid] = moveX;
	winningCombination(board);
}

function computerMove(){
	console.log('computer turn');
	console.log(fields)
		if (fields.length > 0){
			var randomCell = getRandomInt(9);
			var isEmpty = emptySpaceCheck(randomCell);
			if (!isEmpty){
				computerMove();
			}else{
				var moveO = document.getElementById(randomCell).textContent='O';
				theMessage("X's turn now")
				fields.pop();
				board[randomCell] = moveO;
				playField.addEventListener('click', userTurn);
				winningCombination(board)
		}
		}else{
			console.log(fields)
			theMessage("Draw!!! - Click on me to play again")
			return
	}
	
}

function userTurn(e){
	var squareid = e.target.id;//reading value of the square
	var emptySpace = emptySpaceCheck(squareid);
	if (emptySpace){
		playerMove(squareid);
		setTimeout(computerMove, 1000)
		playField.removeEventListener('click', userTurn)
	}else{
		theMessage('pick another square');
	}
}

function emptySpaceCheck(squareid){
	var emptySpace = document.getElementById(squareid).textContent;
	console.log(squareid, emptySpace)
	if (!emptySpace){
		console.log('its empty')
		return true
	}else{
		console.log('not empty')
		return false
	}	
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function winningCombination(boad){
	//if X or O are placed in any of winCombos
	
	
}

function theGame(e){
	theMessage("you are starting with 'X'")
	document.getElementById('messages').removeEventListener('click', theGame)
	board = Array.from(Array(9).keys()); //creating array for combinations of X and O
	fields = new Array(9).fill(1); //an array to keep track of fields
	board.forEach((element)=>{
		document.getElementById(element).textContent = '';
	})
	var playField = document.querySelector('#structure');
	playField.addEventListener('click', userTurn);
};

theGame();