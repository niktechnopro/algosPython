let string = "I like Internet very much"
//let's convert string to an arry
let arrayOfStrings = string.split(' ');
// let's iterate over this array to find longer string

function largestString(arrayOfStrings){
  let largest = arrayOfStrings[0].length;
  let largestIndex;
  for (let i = 0; i< arrayOfStrings.length; i++){
    if (arrayOfStrings[i].length > largest){
      largest = arrayOfStrings[i].length;
      largestIndex = i
    }
  }
  return arrayOfStrings[largestIndex];
}

console.log(largestString(arrayOfStrings))



// same thing but with Reduce
// function largestString(arrayOfStrings){
//   let larg = arrayOfStrings.reduce((longest, current)=>{
//     return current.length > longest.length ? current : longest;
//   })
//   return larg;
// }