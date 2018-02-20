var longLongVowels = function(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    newWord = [word[0]]
    for (var i = 1; i < word.length; i++) {
        if (word[i] == word[i - 1] && vowels[word[i].toLowerCase()] !== 1) {
            newWord.push(word[i] + word[i] + word[i]);
        }
        newWord.push(word[i])
    }
    return newWord.join('');
}
console.log(longLongVowels('book')); //should return boooook