// if we do not know how many arguments will be passed we can use arguments object
// and then extract passed arguments from that object
// arguments is a local variable available within all functions
function destroyer(arr) {
  // Remove all the values
  for (i = 1; i < arguments.length; i++){
    var arr = arr.filter((element) => element != arguments[i]);
  }
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


//another version
function destroyer2(arr) {
  // Remove all the values
  var val = Object.values(arguments);
  for (let i of val){
    arr = arr.filter(function(item){
      return item !== i;
    });
  };
  return(arr);
}

console.log(destroyer2([1, 2, 3, 1, 2, 3], 2, 3));

