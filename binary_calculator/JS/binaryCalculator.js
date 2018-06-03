// alert('Sanity check');
//first let's make a listener for buttons
let btns = document.querySelector('#btns');
let display = document.querySelector('[name=display]')
let number = ''; //we are going to create a number as a string
let expressionArray = [];
let resultString ='';
//let's add an event listener
btns.addEventListener('click', valueReader);//where valueReader handles value

function valueReader(event) {
	if (event.target.innerText !== undefined){
		// display.value = event.target.innerText;
		calcLogic(event.target.innerText)
	}
}

function calcLogic(value){
	console.log(value)
	switch(true){
		case /\d/.test(value):
			number += value;
			resultString += value;
			display.value = resultString
		break
		case /[+-/*]/.test(value):
			expressionArray.push(parseInt(number, 2));
			if (resultString.length > 0 && resultString[resultString.length-1]){
				expressionArray.push(value);
				resultString += value;
			}
			display.value = resultString;
			number = '';
			break
		case /=/.test(value):
			console.log('equal was pressed')
			let resString = '';
			expressionArray.push(parseInt(number, 2));
			number = '';
			console.log(expressionArray)
			if (expressionArray.length > 2){
				//we'll use eval to evaluate the expression
				for (let i of expressionArray){
					resString += i;
				}
				display.value = ((eval(resString).toString(2)))
			}
			expressionArray = [];
			number = '';
			resultString = '';
			break
		case /C/.test(value):
			display.value = 0;
			expressionArray = [];
			number = '';
			resultString = '';
			break
	}
	
	
}