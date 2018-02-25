// The includes() method determines whether a string contains the characters of a specified string.
// This method returns true if the string contains the characters, and false if not.

// function vowelsAndConsonants(s) {
//     let vowels = ['a','e','i','o','u']
//     let vowels1 = 'aeiou'
//     for (let i=0; i<s.length; i++){
//         if (vowels.includes(s[i])){
//             console.log(s[i])
//          }
//     }
//     for (i of s){//another way to iterate through loop
//         if (!vowels.includes(i)){
//             console.log(i)
//          }
//     }
// }

// vowelsAndConsonants('javascriptloops');

//more elegant solution with 1 loop
function vowelsAndConsonants(s) {
    let vowels = ['a','e','i','o','u'];
    let consonants = '';
    let vowels1 = ''
    for (i of s){
        if (vowels.includes(i)){
          vowels1 += i + '\n'
        }else{
          consonants += i + '\n'
        }
    }
    return (vowels1 + consonants);
}

console.log(vowelsAndConsonants('javascriptloops'))


//and with accounting for uppercase and spaces if any
// function vowelsAndConsonants(s) {
// 	s = s.toLowerCase();
//     const vowels = "aeiou";
//     let consonants = "";

//     for(let i=0; i<s.length; i++){
//       if (s[i] != ' '){
//     	if(!vowels.includes(s[i])){
//     		  consonants += s[i] + "\n"; 
//       	} else {
//     		  console.log(s[i]);
//     	}
//       }
//     }
//    console.log(consonants);
// };
