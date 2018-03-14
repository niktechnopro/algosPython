function getCount(string) {
    var avoid = [',', '/', ' ', '&', '!', '<', '>', '?']//array of characters to ignore
    var freq = {};
    for (var i=0; i<string.length;i++) {
      var character = string.charAt(i).toLowerCase();
      if(avoid.indexOf(character) == -1){
          if (freq[character]) {
            freq[character]++;
          } else {
            freq[character] = 1;
          }
      }
    }
  return freq;
};

console.log(getCount("Science, History, Travel, Health & Wellness, Professional Development, Photography, Cooking and much more!"))