console.log('letter count module');
var bttn = document.querySelector('[name="button"]');

bttn.addEventListener('click', fetching);


function fetching(){
	var userInput = document.querySelector('[name="inputText"]').value.trim();
	var url = "http://anyorigin.com/go?url=" + (userInput) + "&callback=?";
	console.log('getting url from the field', url);
	var promiseOne = fetch(url)
	.then(response=>response.json())
	.then(data=> console.log(data))
	.catch(error=>console.log(error))
	console.log(promiseOne)
}

