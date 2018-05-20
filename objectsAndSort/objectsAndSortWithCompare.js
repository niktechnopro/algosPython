//reversing the string
var testString = "this is a test string";
// function reversed(str){
//   let reversed = '';
//   for (let i=testString.length; 0<=i; i--){
//     reversed += testString[i]
//   }
//   return reversed;
// }

function reversed(str){//another way with function
  return str.split('').reverse().join('')
}
console.log(reversed(testString));

//sorting practice
var givenArray = [{radius: 5}, {radius: 9}, {radius: 2}];
let sortedArray = givenArray.sort((a,b)=>{
  return a.radius - b.radius;
})
console.log(sortedArray)

//third assignment - length of array without length
let array = [1,2,3,4,null,6,undefined]
function length_of_array(array){
  let counter = 0;
  for (let i in array){
    console.log(array[i])
    counter ++;
  }
  return counter
}