function palindrome(str) {
 //first - let's reverse the String
  text = str.toLowerCase().replace(/[\W_]+/g, '');
  //remove all white spaces
  //[\W_]-looks for any non-word character and _ replaces all _ 
  var reversedText = "";
  for (let i=(text.length-1); i>=0; i--){
    reversedText += text[i];
  }
  if (text !== reversedText){
    return false;
  }
  return true; 
}
console.log(palindrome("never odd or even"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("never odd or even1"));