//now we are going to test our image uploader before creating component in react
const URL = 'http://';
let submit = document.querySelector('[name="submit"]');
let preview = document.querySelector('#image_tag');
submit.addEventListener('click', imageFile);

function imageFile(){
	file = document.getElementById("file_uploader").files[0];
	fileProcessor(file).then((result) => {
		sendToServer(canvasWorks(result));
		let fileToSend = new FormData();
		fileToSend.append('name', file.name);
		fileToSend.append('type', file.type);
		fileToSend.append('encoded_image', result)
		return sendToServer(fileToSend);
	}).catch(err => console.log(err));
}


function fileProcessor(file){
	if(file){
		let reader = new FileReader();
		if (reader){
			return new Promise((resolve, reject)=> {	
				reader.onload = (event) => {
				    // The file's text will be printed here
				    // console.log(event.target.result)
				    preview.src = reader.result;
				    resolve(reader.result)
			  	};
			  	reader.onerror = (event) => {
			  		preview.src = "";
			  		alert('there was a problem with the image')
			  		reject(reader.error)
			  	}
			  	reader.readAsDataURL(file);
			})
		}else{
			alert('Your browser does not support our image uploader')
		}
	}else{
		alert('please choose the file to upload')
		return;
	}
	
}


function canvasWorks(img){
	//first let's create invisible image element and attach it to anything
	let imageCopy = new Image();//creates new <img> element
	document.body.appendChild(imageCopy);
	imageCopy.setAttribute('style', 'display: none');
    imageCopy.setAttribute("src", img);

    //let's set the Canvas next
    if (imageCopy){
	    let imgCanvas = document.createElement("canvas"),
	    imgContext = imgCanvas.getContext("2d");

	//let's calculate the right ratio for desired screen, desired width=750px  and height=450px
	    let ratio = Math.min(750/imageCopy.width, 450/imageCopy.height)
	    imgCanvas.width = imageCopy.width*ratio;
	    imgCanvas.height = imageCopy.height*ratio;

	    console.log(imgCanvas.width, imgCanvas.height, ratio)
    // Draw image into canvas element
    	imgContext.drawImage(imageCopy, 0, 0, imgCanvas.width, imgCanvas.height);

    // Read information from Canvas
    	imgInfo = imgCanvas.toDataURL('image/png');
    	preview.src = imgInfo;
    	document.body.removeChild(imageCopy);
    	// console.log('resized image',imgInfo);
    	return imgInfo;
    }
}

function sendToServer(formdata){
	console.log('this will be send to server');
	fetch(URL,{
		method: 'POST',
		headers: new Headers{'Content-Type': 'application/json'},
		body: formdata
		})
	.then((res)=>res.json())
	.catch((error)=>console.lot('error occured', error))
	.then((result)=>console.log('data successfully sent',result))
}

