// alert('sanity check')

//defining constants:
let image = document.querySelector('#slider-image');

let imagePromise = new Promise((resolve, reject)=>{
	imageWidth = image.width;
	let imageHeight = image.height;
	if (image){
		resolve({
		width : imageWidth,
		height : imageHeight
		})
	}
})

imagePromise.then((result) => {
	let width='boo'
	let imageWrapper = document.querySelector('#image_wrapper')
	imageWrapper.width=result.width;
})


function moving(e){
	//changing image width
	let newWidth = e/100 * imageWidth;
	image.width = newWidth;
}