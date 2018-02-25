// The includes() method determines whether a string contains the characters of a specified string.
// This method returns true if the string contains the characters, and false if not.

function vowelsAndConsonants(s) {
    let vowels = ['a','e','i','o','u']
    let vowels1 = 'aeiou'
    for (let i=0; i<s.length; i++){
        if (vowels.includes(s[i])){
            console.log(s[i])
         }
    }
    for (i of s){//another way to iterate through loop
        if (!vowels.includes(i)){
            console.log(i)
         }
    }
}

vowelsAndConsonants('javascriptloops');
