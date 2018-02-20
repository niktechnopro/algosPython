

string = ""
let printSquare = (size)=>{
	for (let i=0; i<size**2; i++){
		if (string.length%(size+1) === 0){
			string += "\n"
		}
		string += '*'

	}
	return string
}	

console.log(printSquare(8))