function getCount(string) {
    var avoid = [',', '/', ' ', '&', '!', '<', '>', '?']//array of characters to ignore
    var letterCount = {};
    for (var i=0; i<string.length;i++) {
      var character = string.charAt(i).toLowerCase();
      if(avoid.indexOf(character) == -1){
          if (letterCount[character]) {
            letterCount[character]++;
          } else {
            letterCount[character] = 1;
          }
      }
    }
  return letterCount;
};

console.log(getCount("Science, History, Travel, Health & Wellness, Professional Development, Photography, Cooking and much more!"))