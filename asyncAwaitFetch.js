// fetch is native to ES6, can run from browser instead of importing .ajax
//simple fetch request with promisses
let url = 'https://rallycoding.herokuapp.com/api/music_albums';
function fetchAlbums(){
	fetch('url').then(res => res.json()).then(json => console.log(json));
}

//better way
async function fetchAlbums(){
	let result = await fetch('url');
	let json = await result.json();
	console.log(json);
}

//better way with a function expession
const fetchAlbums = async () => {
	let result = await fetch('url');
	let json = await result.json();
	console.log(json);
}

//to run as IIFE - immediately invoked function expression
(async function fetchAlbums6(){
	let result = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
	let json = await result.json();
	console.log(json);
})();