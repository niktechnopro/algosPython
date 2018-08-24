// alert('sanity check')

//defining constants:
let image = document.querySelector('#slider-image');
let width;
let frame = document.querySelector('#frame');
let frameHeight;

if (image){
	imageWidth = image.width;
	let imageHeight = image.height;
	frameHeight = frame.height;
	console.log(frame, frameHeight)
}

function moving(e){

	console.log(e, imageWidth)
	//changing image width
	let newWidth = e/100 * imageWidth;
	image.width = newWidth;
	frame.setAttribute('height', frameHeight)
}