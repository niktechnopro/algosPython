var fs = require('fs');
var path = require('path');

var recipiesPath = path.join(__dirname + '/recipies/');//creating a path to all recipies
//reading 
fs.readdir(`${recipiesPath}`, function(error, files){
	if (error){
		console.log('issues reading the files')
	}else{
		//this is where the magic happens
		let data = fileIterator(files)
		data.then((successMessage) => { 
  			console.log(successMessage);
		});
	}
})

function fileIterator(files){
	return new Promise((resolve, reject) => {
		var recipes = new Array();
    	files.forEach((file, index)=> {
			if (file !== '.DS_Store') {//something that finder puts into directory
			 	fs.readFile(recipiesPath+file, 'utf8', (error, data)=>{
			 		if (error){
			 			reject(error)
			 		} else{
		 				let json = makingJSON(data);
		 				recipes.push(json);
			 		} 
			 		if (recipes.length == files.length - 1) {
						resolve(recipes);
					}
				});
			}
		});
  	}); 
}


//this function will make a json data from each file
function makingJSON(data){
	let recipieObject = {};
	//we'd have to use regular expressions to slice and dice text to JSON
	var splitData = data.split('\r\n');//split on carriage return
	// console.log(splitData)
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



