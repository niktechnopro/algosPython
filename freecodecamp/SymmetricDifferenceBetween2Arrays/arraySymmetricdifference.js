function diffArray(arr1, arr2) {
  let newArr = [];
  //let's compare the arrays
  arr1.forEach((element)=>{
    if(!arr2.includes(element)){
      newArr.push(element)
    }
  })
  arr2.forEach((element)=>{
    if(!arr1.includes(element)){
      newArr.push(element)
    }
  })
  console.log(newArr)
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
["diorite", "andesite", "grass", "dirt", "dead shrub"]);
