// function factors(x){
// 	var factorsList = [];
// 	let i = 0;
// 	while (i <= x){
// 		// console.log(i)
// 		if (x%i == 0){
// 			factorsList.push(i)
// 		}

// 		i++;
// 	}
// 	return factorsList
// }
// console.log(factors(10))

var isPrime = function(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

var getPrimes = function(num) {
  var numbers = [];
  for (i = 1; i < num; i++) {
    if (isPrime(i)) {
      numbers.push(i);
    }
  }
  return numbers;
}

function getFactors(num) {
  num = parseInt(num);
  var factors = [];
  var primeNumbers = getPrimes(num);
  while(!isPrime(num)) {
    for (var i = 1; i < primeNumbers.length; i++) {
      if (num % primeNumbers[i] === 0) {
        factors.push(primeNumbers[i]);
        num = num / primeNumbers[i];
        break;
      }
    }
  }
  factors.push(num);
  console.log(`${num} => ${factors.join(', ')}`);
}

getFactors(0);
getFactors(3);
getFactors(28);
getFactors(55);