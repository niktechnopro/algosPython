function largestOfFour(arr) {
  var newArray = []
  arr.map((val)=>{ //iterating through elements of given array 'arr'
    var highNumber = Math.max.apply(null, val); //highest number is arrays
    newArray.push(highNumber) //adding highest number into new array
    })
  return newArray
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);