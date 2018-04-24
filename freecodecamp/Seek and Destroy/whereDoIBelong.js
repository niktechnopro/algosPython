function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  //first let's push num into arr
  arr.push(num);
  //let's sort array arr
  var temp = arr.sort(function(a,b){
    return a-b;
  });
  numInd = temp.indexOf(num);
  return numInd;
}

getIndexToIns([40, 60], 50);
