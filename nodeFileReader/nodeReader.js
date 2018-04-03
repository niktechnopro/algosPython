var fs = require('fs');
var path = require('path');
var arrayOfObjects = new Array();

var recipiesPath = path.join(__dirname + '/recipies/');//creating a path to all recipies
//reading 
fs.readdir(`${recipiesPath}`, function(error, files){
	if (error){
		console.log('issues reading the files')
	}else{
		//this is where the magic happens
		let data = fileIterator(files)
		// console.log(data)
	}
})

function fileIterator(files){ //supposed to return an array of objects
	files.forEach((file, index)=>{
		if (file !== '.DS_Store'){//something that finder puts into directory
		 	fs.readFile(recipiesPath+file, 'utf8', (error, data)=>{
		 		if (error){
		 			reject(error)
		 		}else{
	 				let json = makingJSON(data);
	 				console.log(json)
		 		} 
			});
		}
	})

}


//this function will make a json data from each file
function makingJSON(data){
	let recipieObject = {};
	//we'd have to use regular expressions to slice and dice text to JSON
	var splitData = data.split('\r\n');//split on carriage return
	console.log(splitData)
	splitData.forEach((element, index)=>{
		let el = element.split(/:(.+)/);//split on ':'
		if (el[0] == 'Ingredient'){
			recipieObject['Ingredients'] += el[1]+','
		}else{
			recipieObject[el[0]]=el[1]
		}
	})
	return recipieObject;
}
	

