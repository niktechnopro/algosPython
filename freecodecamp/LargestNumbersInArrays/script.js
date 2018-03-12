// alert('sanity check')
//first jquery readers
$(document).on('click',()=>{
	var username = $('.username').val();
	var password = $('.password').val();
	console.log(username, password)
	if (username == '' || password == ''){ //simple verification if fields not empty
		$('#message').html('Please Fill in Both Fields')
	}
});
