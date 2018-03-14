// 0, 1, 1, 2, 3, 5, 8, 13... 
// considering that first number=0, second=1, 
// third=1, fourth=2, etc


var fib = function(n) {
  //so a=0, b=1; and c is an element we are interested in
  var a = 0, b = 1, c;
  if (n < 0) c = "must be 0 or positive number";
  else if(n == 1) c = 0;
  else if(n <= 2) c = 1;
  else{
    for (let i = 3; i<=n; i++){
      c = a + b; // the next number is sequence is a sum of 2 previous numbers
      a = b
      b = c;
    }
  }
  return c
};

console.log(fib(5)); //fifth element should return 3




