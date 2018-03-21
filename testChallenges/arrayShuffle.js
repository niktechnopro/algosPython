//creating originalArray
let originalArray = function(){
  const array = new Array();
  for (let i = 1; i <= 100; i++){
    array.push(i)
  }
  return array;
}();

//implementing Durnstenfeld shuffle to shuffle the array
let shuffledArray = function(){
    let arrayToMessWith = originalArray.slice(0);
    for (let i = arrayToMessWith.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arrayToMessWith[i], arrayToMessWith[j]] = [arrayToMessWith[j], arrayToMessWith[i]];
    }
    //removing a random number from resulting array
    let randomIndex = Math.round(Math.random()*arrayToMessWith.length)
    let x = arrayToMessWith.splice(randomIndex, 1)//x is our element
    return arrayToMessWith;
}();


//now let's compare 2 arrays:
// version a:
let compareArray = function(originalArray, shuffledArray){
  for (let i of originalArray){
    if (shuffledArray.indexOf(i) == -1){
       return i;
    }
  }
}

//version b - suggested and discussed at the interview:
// let compareArray = function(originalArray, shuffledArray){
//   let array1 = originalArray.reduce((sum, element)=>{
//     return sum+element;
//   })
//   let array2 = shuffledArray.reduce((sum, element)=>{
//     return sum+element;
//   })
//   return (array1 - array2)
// }


console.log('the number removed from array: ' + compareArray(originalArray, shuffledArray));