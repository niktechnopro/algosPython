function translatePigLatin(str) {
  let wovels = ['a','i','e','o','u'];
  let final = '';
  if (wovels.includes(str.charAt(0))){
    final = str + 'way';
  }else{
    let tempIndex = [];
    for (let i=0; i<wovels.length; i++){
      let ind = str.search(wovels[i]);
      if (ind>0){
        tempIndex.push(ind);
       
      }
    }
    let smallest = Math.min(...tempIndex);
    final = str.slice(smallest) + str.slice(0,smallest)+'ay'
  }
  return final;
}

console.log(translatePigLatin("consonant"));//should return onsonantcay
console.log(translatePigLatin("glove"));//should return "oveglay".