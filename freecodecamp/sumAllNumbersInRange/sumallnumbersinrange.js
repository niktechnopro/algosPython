function sumAll(arr) {
  //let's find min/max number in array
  let arrMax = Math.max(...arr);
  let arrMin = Math.min(...arr);
  //building new array from arrMin to arrMax;
  let tempArr = Array(arrMax).fill(arrMin);
  let extendedArr = tempArr.map((item, index)=>{
    return index+1;
  });
  //now let's make an array starting from arrMin
  let correctedArray = extendedArr.filter((item, index)=>{
    return item >= arrMin;
  });
  console.log(correctedArray);
  //and now let's sum all the numbers in array
  let sumAll = correctedArray.reduce((total, sum)=>{
    return total+sum;
  });
  return sumAll;
}

console.log(sumAll([1, 4]));
