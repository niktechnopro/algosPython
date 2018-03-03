// var names = [
// 	{nikolas : {
// 		firstName : 'Nikolas',
// 		lastName : 'Bogucarskis',
// 		strength : 9}
	  
// ,
//  joshua : {
// 		firstName : 'Joshua',
// 		lastName : 'Martin',
// 		strength : 10}
// 	}
// ]

// var array = [1, 5, 6, 3, 8, 9, 4]
// console.log(ToPrimitive(array, Number))
// console.log(array.toString())
// var sorted = names.sort((a,b)=>{
//   console.log(a,b)
//   return a.firstName > b.firstname;
// })

// console.log(sorted)

var students = [
  {name: 'Prathyusha', height: 100, strength: 10},
  {name: 'Ben', height: 10, strength: 12},
  {name: 'Jaehee', height: 1000, strength: 8}
];

// Hard-coded sorting by height
students.sort(function(a, b) {
  if (a.height > b.height) {
    return 1;
  } else if (b.height > a.height) {
    return -1;
  } else {
    return 0;
  }
});


// A function that generates the
// sorter function for any given property
var sortBy = function(prop) {
  return function(a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (b[prop] > a[prop]) {
      return -1;
    } else {
      return 0;
    }
  }
};

// Now we can sort any way
// we want with one line of code!
console.log(students.sort(sortBy('height')));
console.log(students.sort(sortBy('name')));