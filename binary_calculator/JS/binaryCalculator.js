// alert('Sanity check');
//first let's make a listener for buttons
let btns = document.querySelector('#btns');
let display = document.querySelector('[name=display]')
//let's add an event listener
btns.addEventListener('click', valueReader);//where valueReader handles value

function valueReader(event) {
	if (event.target.innerText !== undefined){
		display.value = event.target.innerText;
		calcLogic(event.target.innerText)
	}
}

function calcLogic(value){
	console.log(value)
}