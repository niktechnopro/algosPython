// Write JavaScript that defines an array, loads it with some data, and then loops through the members of that array. Do the same for an object.


board = Array.from(Array(9).keys()); //create array 0 to 8
for (let i of board){
  console.log(i)
}

let object = {};
for (let i=0; i<board.length; i++){
  object[`key${i}`] = i;
}

for (let i in object){
  console.log(object[i])
}