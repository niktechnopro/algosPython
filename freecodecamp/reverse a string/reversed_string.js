// function reverseString(str) {
//   reverse = "";
//   howLong = str.length - 1;
//   for (let i = howLong; i>=0; i--){
//     reverse += str[i];
//   }
//   return reverse;
// }
// reverseString("hello");

//with reverse method
function reverseWithReverse(str){
  array = [];
  for (l of str){
  array.push(l);
  }
  reversedString = (array.reverse()).join('');
  return reversedString;
}
console.log(reverseWithReverse('hello'));
