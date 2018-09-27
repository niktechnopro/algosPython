function slasher(arr, howMany) {
  // it doesn't always pay to be first

  //slice method returns the selected elements in an array as a new array object
  //has 2 parameters slice(start, end) - both are optional- if one is ommited
  //will either start from start of array of finish at the end of array 
  arr = (arr.slice(howMany));
  return arr;
}

console.log(slasher([1, 2, 3, 4], 2));
