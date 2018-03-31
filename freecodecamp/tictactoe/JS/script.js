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
	let messages = document.getElementsByClassName('messages')[0];
	messages.textContent=msg;
	messages.classList.remove('pointer');
	if (fields.length < 1){
		console.log('adding listener')
		messages.classList.add('pointer');
		messages.addEventListener('click', theGame)
	}
	return	
}

var playerMove =function(squareid){
	console.log('player move', fields)
	fields.pop()
	var moveX = document.getElementById(squareid).textContent='X';
	theMessage("O's turn now");
	console.log(squareid)
	board[squareid] = moveX;
	let winningX = winningCombination(board);
	if (winningX){
		gameOver('X', 'red', winningX)
	}
}

function computerMove(){
	console.log('computer turn', fields);
		if (fields.length > 0 && fields.length < 10){
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
				let winningO = winningCombination(board);
				if (winningO){
					gameOver('O', 'lightgreen', winningO)
				}
			}
		}else if(fields.length == 10){
			return
		}else{
			console.log(fields, "draw")
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
	console.log(board)
	// let's find indexes for 'X'
	for (let combo of winCombos){
		// console.log('win combos', combo)
		let countX = 0;
		let countY = 0;
		for (let el of combo){
			if(board[el] == 'X'){
				countX ++;
				if (countX == 3){
					console.log('winning combo for X');
					return combo;
				}
			}
		}
		for (let el of combo){
				if(board[el] == 'O'){
					countY ++;
					if (countY == 3){
						console.log('winning combo for O');
						return combo;
					}
				}
			}

	}
}

function theGame(e){
	theMessage("you are starting with 'X'")
	document.getElementsByClassName('messages')[0].removeEventListener('click', theGame)
	board = Array.from(Array(9).keys()); //creating array for combinations of X and O
	fields = new Array(9).fill(1); //an array to keep track of fields
	// console.log('resetting background');
	board.forEach((element)=>{
		document.getElementById(element).textContent = '';
		document.getElementById(element).style.background = '';
		})
	var playField = document.querySelector('#structure');
	playField.addEventListener('click', userTurn);
};

function gameOver(player, color, winning){
	console.log(player)
	if (player == 'X'){
		theMessage("'X' player won!!! Click on me to play again");
		for (let i of winning){
			document.getElementById(i).style.background = color;
		}
		document.getElementsByClassName('messages')[0].classList.add('pointer');
		document.getElementsByClassName('messages')[0].addEventListener('click', theGame)
		fields = new Array(10).fill(1);
	}else if(player == 'O'){
		theMessage("'O' player won!!! Click on me to play again");
		fields = new Array(10).fill(1);
		for (let i of winning){
			document.getElementById(i).style.background = color;			
			}
		document.querySelector('#structure').removeEventListener('click', userTurn);
		document.getElementsByClassName('messages')[0].classList.add('pointer');
		document.getElementsByClassName('messages')[0].addEventListener('click', theGame)	
	}
}



theGame();