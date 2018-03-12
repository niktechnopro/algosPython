function bouncer(arr) {
	const falsyValues = [false, null, 0, "", undefined, NaN];
	let newArray = arr.filter((val) => {
      //array.includes(val) - veryfies if array include val this return is for
		return !falsyValues.includes(val);//populates newArray if condition 'true'
    });
  return newArray;
}

console.log(bouncer([1, null, NaN, 2, undefined]));

//Boolean has only two falues: true and false,
//because 6 JS datatypes produce false (0, null, undefined, NaN, '', false)
//we can just compare values of given array not to array with false values but with
//Boolean false/true

function bouncer(arr) {
  return arr.filter(Boolean);
}
