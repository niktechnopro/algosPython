console.log('loading the script');
// import countries from './countrylist.js';//regular ES6 syntaxis
var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
let inpfield = document.querySelector('#autocomplete');//targeting input field
let wrapper = document.querySelector('#autocomplete_wrapper');//wrapper around input
let appender = document.querySelector('.autocomplete-items');//wrapper around input
let currentFocus;
//setting up our listener
// inpfield.addEventListener("focus", handleFocus);
inpfield.addEventListener('input', handleKeyDown);
wrapper.addEventListener('click', populateInput);


function handleKeyDown(e){

	//'this' in here represent input DOM element 
	// reading from the input field
	let value = e.target.value;
	closeAllLists();
	if(!value){
		return
	}
	//next creating an array of countries
	countrySelection(value)
}


function countrySelection(value){
	console.log('before iterator', value)
	currentFocus = -1;
	for (let i=0; i<countries.length; i++){
		// with substrings we'll be able to match what we are typing
		if (countries[i].substr(0, value.length).toUpperCase()===value.toUpperCase()){
			let divAppend = document.createElement('div');//creating new element
			divAppend.setAttribute('class', 'autocomplete-item')
			divAppend.setAttribute("value", countries[i]);
			/*make the matching letters bold:*/
	        divAppend.innerHTML = "<strong>" + countries[i].substr(0, value.length) + "</strong>";
	        divAppend.innerHTML += countries[i].substr(value.length);
	        /*insert a input field that will hold the current array item's value:*/
	       	divAppend.innerHTML += "<input type='hidden' value='" + countries[i] + "'>";
	        /*execute a function when someone clicks on the item value (DIV element):*/
			appender.appendChild(divAppend);
		}	
	}
}

function populateInput(e){
	console.log(e.target.innerText);
	inpfield.value = e.target.innerText;
	closeAllLists()
}

function closeAllLists(){
	let items = document.querySelectorAll('.autocomplete-item');
	for (var i = 0; i < items.length; i++) {
        appender.removeChild(items[i]);
    }
}


//the following to use buttons to navigate up and down and Enter
inpfield.addEventListener("keydown", function(e) {
	//let's get an array of all elements
	let items = document.querySelectorAll('.autocomplete-item');
	let button = e.keyCode;
	if (button === 40){
		currentFocus++;
	}else if(button === 38){
		currentFocus--;
	}else if(button === 13){
		console.log('pressed Enter button')
		e.preventDefault();
		// console.log(items[currentFocus].getAttribute('value'));
		items[currentFocus].click();
		return
	}
	if (currentFocus > items.length-1){
		currentFocus = 0;
	}
	if (currentFocus < 0){
		currentFocus = items.length-1;
	}
	if (items.length && currentFocus > -1){
		items[currentFocus].classList.add("autocomplete-active");
		for (var i = 0; i < items.length; i++) {
			if(items[i]!==items[currentFocus]){
      			items[i].classList.remove("autocomplete-active");
      		}
    	}
	}
	// console.log(items)
	// console.log(button)
	// console.log(currentFocus)
  });



