function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  //let's extract a key from source
  let sourceKey = Object.keys(source);
  let howManyKeys = sourceKey.length;
  function compareKeys(i){
    let tempArray = []
    for(let key of sourceKey){
      if(i[key] === source[key]){
         tempArray.push(i)
      }
    }
    if(tempArray.length === howManyKeys){
      return true
    }else{
      return false
    }
  }
  //  let's iterate
  for (let i of collection){
    if(sourceKey.length<2){
      if(i[sourceKey]===source[sourceKey]){
        arr.push(i)
      }
    }else{
        if(Object.keys(i).length >= howManyKeys && compareKeys(i)){
          arr.push(i)
        }
      }
    }
  // Only change code above this line
  console.log(arr)
  return arr;
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) 
// should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

// whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})
// should return []