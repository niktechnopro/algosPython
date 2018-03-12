//finding largest subarray by sum
//helper function to find largest Number
function largestNumber(array){
  var index = 0
  var min = array[0]
  for (i of array) { 
    (min < i) ? min = i : min = min;
    index += 1
  }
  return index
}  
 
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//it comes down finding the index of largest subarray sum
function largestOfFour(arr){
  sum = (prValue, curValue)=>{
    return prValue + curValue
  }
  var sumarray = [];
  for (array of arr){
    sumarray.push(array.reduce((sum), 0));
    }
  console.log(sumarray)
  var larNumber = Math.max.apply(null,sumarray)
  var index = sumarray.indexOf(larNumber)
  // index = (largestNumber(sumarray)-1)
  return (arr[index])
}