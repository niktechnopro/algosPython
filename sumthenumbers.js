function sumNumbers(a){
	let sum = 0
	for (num of a){
		sum += num
	}
	return sum
}

console.log(sumNumbers([1, 4, 8]))