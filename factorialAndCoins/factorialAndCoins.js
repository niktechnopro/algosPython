// factorial function
function factorial(n){//factorial is a product of n!
  let sum=1
  for (let i=n; i >0; i--){
    sum *= i;
  }
  return sum
}
console.log(factorial(4))
//coin converter
//87 cents should convert into 25,25,25,10,2
//let's create an array of possible coins
let coins = [25,10,5,1];
let coinConverter = (amount) =>{
  let total = amount;
  let accumulator = new Array();
  while (amount > 0){
    if (amount - 25 > 0){
      amount -= 25;
      accumulator.push(25);
    }else if(amount - 10 > 0){
      amount -=10;
      accumulator.push(10);
    }else if(amount - 5 > 0){
      amount -= 5;
      accumulator.push(5)
    }else if(amount -1 > 0){
      amount -= 1;
      accumulator.push(1)
    }else if(amount - 1 === 0){
      accumulator.push(1)
      break;
    }
  }
  return `to break ${total} cents only needed the following coins: ${accumulator}`;
}

console.log(coinConverter(84))

//another version with coins
function convert_to_coins(amount) {
  var denominations = [25, 10, 5, 1];
  var curr_denom_index = 0;
  while (amount > 0) {
    while (amount < denominations[curr_denom_index]) {
      curr_denom_index++;
    }
    amount = amount - denominations[curr_denom_index];
    console.log(denominations[curr_denom_index]);
  }
}
convert_to_coins(87)


