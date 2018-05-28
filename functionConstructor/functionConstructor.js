/**
	This file contains the solution to the assignment problems for chapter 4//** Problem 1 **/
function Rectangle(height, width) {
  this.area = function() {return height * width};
  this.perimeter = function() {return 2 * (height + width)};
}

/** Problem 2 **/
/** Think about why we need to have this.x = x and this.y = y statements, which was not required in the Rectangle function above **/
function Point(x, y) {
  this.x = x;
  this.y = y;
  this.distanceFrom = function(another) {
    return Math.sqrt((this.x - another.x) * (this.x - another.x) + (this.y - another.y) * (this.y - another.y));
  }
}

/** Problem 3 **/
/** Don't add methods like this in a real project unless you are sure what you are doing. I mean don't mess with inbuilt JS code **/
String.prototype.isPalindrome = function() {
  return this.split('').reverse().join('').valueOf() === this.valueOf();
}

/** Problem 3: Alternatively we can also do this **/
String.prototype.isPalindrome = function() {
  return this.split('').reverse().join('') == this; // with a == operator we don't need to use the valueOf method. WHY?? Check the type of this.split('').reverse().join('')
}

// Write a constructor function to represent a Rectangle
// which can calculate its area and perimeter.
function Rectangle(a, b){//a and b are the sides
  this.area=function(){return a*b},
  this.perimeter=function(){return (a+b)*2}
}

let rec = new Rectangle(3,4);
// console.log(rec)
console.log(rec.area())
console.log(rec.perimeter())

// Write a Point function which takes x and y coordinates as arguments to define it. It should also be able to evaluate the distance from another point. We may make use of this exercise in a later assignment problem when dealing with the Document Object Model.

function Point(x, y){
  this.x = x;
  this.y = y;
}

let point1 = new Point(3,4);
let point2 = new Point(7,8);

let distance = function(){return Math.round(Math.sqrt((point2.x - point1.x)**2 + (point2.y - point1.y)**2))}

console.log(distance());

// Write javascript code so that we can check if a string object is a palindrome. E.g. "xyx".isPalindrome() should return true.

function isPalindrome(string){
  let reversedString = '';
  // this.string = string;
  for (let i = string.length-1; i>=0; i--){
    reversedString += string[i]
  }
  if (reversedString === string){
    return true
  }else{
    return false
  }
}

// console.log(isPalindrome('mom m mom'));
String.prototype.isPalindrome = function() {
  console.log(this.string)
  return this.string.split('').reverse().join('') == this.string; // with a == operator we don't need to use the valueOf method. WHY?? Check the type of this.split('').reverse().join('')
}

console.log(String)