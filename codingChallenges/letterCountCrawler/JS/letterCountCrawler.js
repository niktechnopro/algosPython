console.log('letter count module');
var bttn = document.querySelector('[name="button"]');

bttn.addEventListener('click', validation);

function validation(){
	var userInput = document.querySelector('[name="inputText"]').value.trim();
	if (userInput == ''){
        console.log('field is empty');
        $('[name="inputText"]').val('this field can not be empty').css('color', 'red');
        $('[name="inputText"]').on('focus', function(){
            $(this).val('').css('color', 'black')
       	})
    }else{
    	fetching(userInput);
    }
}


function fetching(userInput){
	// https://my-little-cors-proxy.herokuapp.com/
	// var url = "http://crossorigin.me/" + "https://" + (userInput);
	var url = "https://my-little-cors-proxy.herokuapp.com/" + "https://" + (userInput);
	console.log('getting url from the field', url);
	var promiseOne = $.get(url)
	// console.log(promiseOne)
	promiseOne.then(result => console.log(result))
}

