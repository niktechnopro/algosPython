function factors(x){
	var factorsList = [];
	let i = 0;
	while (i <= x){
		// console.log(i)
		if (x%i == 0){
			factorsList.push(i)
		}

		i++;
	}
	return factorsList
}

console.log(factors(10))