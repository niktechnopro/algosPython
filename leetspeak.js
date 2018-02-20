// Leetspeak
var character = {
    a : '4',
    e : '3',
    g : '6',
    l : '1',
    o : '0',
    s : '5',
    t : '7'
  }
  
  
  function leetspeak(string) {
      res = ''
      for (i of string){
          if (character[i]){
            res += (character[i])
          }else{
            res += i
          }
      }
      return res;
  }
  
  console.log(leetspeak("I like programming and long rest"))
