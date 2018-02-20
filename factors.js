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
  var remainder = num;
  var factors = [];
  var primeNumbers = getPrimes(num).slice(1);
  while(!isPrime(remainder)) {
    for (var i = 0; i < primeNumbers.length; i++) {
      var currentNum = primeNumbers[i];
      if (remainder % currentNum === 0) {
        factors.push(currentNum);
        remainder = remainder / currentNum;
        break;
      }
    }
  }

  factors.push(remainder);
  console.log(`${num} => ${factors.join(', ')}`);
}

getFactors(0);
getFactors(3);
getFactors(28);
getFactors(55);