// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  console.log(arr);
  // idea = we are comparing with indexOf letters in both words and populate 
  // resultArray if match not found
  resultArray = [];
  // converting to lower case
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();
  for (letter of second){
    if (first.indexOf(letter) < 0){//returns -1 if letter from second not in the first
      resultArray.push(letter);
    }
  }
  // console.log("missing letters", resultArray)
  // if resultArray array empty => all letters match
  return (resultArray.length == 0)
}

// mutation(["hello", "hey"]);//should return false

// mutation(["Alien", "line"]) should return true.