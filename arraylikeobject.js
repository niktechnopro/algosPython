var x = Array.from('all about you')
console.log(x)


//will return true if any item is 'y'
c = x.some(function(item, index, x){
  console.log(index, item)
  return item == 'y'
});

console.log('some', c);//true


//will return true if all items 'y', otherwise = 'false'
b = x.every(function(item, index, x){
  // console.log(index, item)
  return item == 'y'
});
console.log(b);//true 