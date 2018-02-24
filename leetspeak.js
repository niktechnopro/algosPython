// Leetspeak
var character = {
    a : '4',
    e : '3',
    g : '6',
    l : '1',
    o : '0',
    s : '5',
    t : '7',
    A : '4',
    E : '3',
    G : '6',
    L : '1',
    O : '0',
    S : '5',
    T : '7'
  }
  
function leetspeak(string) {
    res = '';
    for (i of string){
      if (character[i]){
        res += (character[i])
      }else{
        res += i
      }
    }
  return res
}
  
console.log(leetspeak("I like proGramming and long rest"))
//res.charAt(0).toUpperCase() + res.slice(1);//this string converts first character to Upper case