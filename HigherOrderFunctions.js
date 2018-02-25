//let array = [1,3,5,8,9,10]
let array = ['bob', 'marley', 'john', 'jovi']


function helper(num){
	if (typeof(num) !== 'string'){
		return num % 2 === 0 
	}else{
		return num
	}
}


function findElement(arr, helper){
	let newArray = []
	for (i of arr){
		if (helper(i) === true){
			return i
		}else if(typeof(helper(i)) === 'string'){
			return arr.indexOf(i+'itch')
		}
	}
}


console.log(findElement(array, helper))