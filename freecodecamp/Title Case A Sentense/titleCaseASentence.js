// function titleCase(str){
// //let's split a string into array;
//   var newString = "";
//   array = str.split(' ');
//   for (i of array){
//     i = i.toLowerCase();
//     newString += (i.charAt(0).toUpperCase()+i.slice(1)) + " ";
//   }
// return newString.trim();
// }
// console.log(titleCase("sHoRt AnD sToUt"))
// console.log(titleCase("I'm a little tea pot"))
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))

// function titleCase(str) {
//   var newString = "";
//   array = str.split(' ');
//   for (var x in array){
//     var word = (array[x].toLowerCase());
//     newString += (word.charAt(0).toUpperCase()+word.slice(1)) +" ";
//   }
//   str = newString.trim();
// return str;
// }
// //unfortunately both upper methods leave empty space on the back, therefore we have to .trim()  
function titleCase(str) {
  var newString = [];
  array = str.split(' ');
  for (var x in array){
    var word = (array[x].toLowerCase());
    var oneWord = word.charAt(0).toUpperCase()+word.slice(1)
    newString.push(oneWord);
  }
  str = newString.join(' ')
return str;
}

console.log(titleCase("I'm a little tea pot"));