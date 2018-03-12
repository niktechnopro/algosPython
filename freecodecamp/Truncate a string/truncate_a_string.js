function truncateString(str, num) {
  // Clear out that junk in your trunk
  // based on conditions return variation of a string
 var strLen = str.length;
  if (strLen > num && num > 3){
    str = str.slice(0,(num-3)) + '...';
  }else if (num <= 3){
    str = str.slice(0,num) + '...';
  }else{
    str = str;
  }
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
