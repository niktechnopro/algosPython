// Write a function that takes an array of numbers and returns the sum of squares of those numbers. 

let numbers = [1, 2, 3];
let sum = numbers.reduce((prevItem, nextItem)=>{
  return (prevItem + nextItem**2)
},0)//where 0 is initial value

console.log(sum);

// Write a function that takes an array of numbers as an argument and filters and returns the even numbers in them.

let newNumbers = [1,2,3,4,5,6,7,8,9];
let even = newNumbers.filter((item, i)=>{
  return item % 2 === 0
})

console.log(even)

// Write a function that takes an array and a criteria function(for filtering) and returns the array of those elements which do not fulfill the criteria. The criteria function should take any element as argument and return a boolean value.
// so for example - return only elements that are odd

let criteria = (item)=>{
  // console.log('criteria', item)
  if (item % 2 !== 0){
    return true
  }
  // return false; //returns true if item is even
}

function someCriteria(array, func){
  let newArray = array.filter((item, index) => {
    return (func(item))
  })
  return newArray;
}

console.log(someCriteria(newNumbers, criteria))