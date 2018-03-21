//prime number is greater than 1 and whose factors are 1 and itself, meaning we have to check that number is not devisible by 2 or any number below the one we are intereseted in 

// version a
function primes(){
  let array = [];
  let number = 2; //we start from 2 - first prime number
  while (number <= 100){
    //let's build and array of numbers 1...100 as we go
    array.push(number)
      for (let i = 2; i < number; i++){
        if (number % i === 0){
          //not prime so we can remove it from array
          let index = array.indexOf(number)
          array.splice(index,1)
          break
        }
      }
    number ++;
  }
  return(array);
}
console.log('prime numbers for array of numbers 1..100', primes());


//version b
// function primes(){
//   let array = new Array();
//   let number = 2;
//   while(number <= 100){
//     let count = 0;
//     for(let i= 1; i<=number; i++){
//       if (number % i == 0){
//         count ++;
//         }
//     }
//     if (count <= 2) {//meaning that every number only can be devided twice on 1 and itself
//         array.push(number);
//       }
//     number ++;
//   }
//   return array;
// }
