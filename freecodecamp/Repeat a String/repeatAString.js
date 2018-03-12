function repeatStringNumTimes(str, num) {
  // repeat after me with ternary operator
  (num > 0) ? (str = str.repeat(num)) : (str = "");
  return str;
}

console.log(repeatStringNumTimes("abc", 3));

//the conventinal form
function repeatStringNumTimes(str, num) {
  if (num > 0){
    str = str.repeat(num)
  }else{
    str = '';
  }
  return str;
}

console.log(repeatStringNumTimes("abc", 3));




