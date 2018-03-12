// if we do not know how many arguments will be passed we can use arguments object
// and then extract passed arguments from that object
// arguments is a local variable available within all functions
function destroyer(arr) {
  // Remove all the values
  for (i = 1; i < arguments.length; i++){
    let argument = arguments[i];
    var arr = arr.filter((element) => element != argument);
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

