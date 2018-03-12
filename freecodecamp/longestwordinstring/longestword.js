function findLongestWord(str) {
  //first let's split words and put them in array
  var array = str.split(' ');
  longword = array[0];
  console.log(array);
  for (i in array){
    if (longword.length <= array[i].length){
      longword = array[i]
    }
  } 
  console.log("the longest word in sentence:", longword);
  str = longword;
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// function findLongestWord(str) {
//   //first let's split words and put them in array
//   var array = str.split(' ');
//   var length = array.map((val)=>{
//     return ((val.length))//iteration
//   })
//   return (Math.max.apply(null,length));
// }