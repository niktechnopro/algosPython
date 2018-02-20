function positiveNumbers(a){
	let positive = []
	for (num of a){
		if (num > 0){
			positive.push(num)
		}
	}
	return positive
}





console.log(positiveNumbers([1, -3, 5, -3, 0]))
// [1, 5, 0] - should return