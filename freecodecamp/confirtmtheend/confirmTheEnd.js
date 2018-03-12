//solved using .substr(start, end) - method


function confirmEnding(str, target) {
  var strLength = str.length;
  var targetLength = target.length;
  var offSet = strLength - targetLength;
  
  console.log(strLength, targetLength, offSet);
  result = str.substr(offSet, strLength);
  if (result == target){
    var ret = true;
  }else{
    var ret = false;
  }
  return ret;
}

confirmEnding("Bastian", "n");