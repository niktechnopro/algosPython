//better solution
(()=>{
  for (let i=1; i<=100; i++){
    let str = "";
    if (i % 3 === 0){
      str+="Fizz"
    }
    if(i % 7 === 0){
      str+="Buzz"
    }
    if(str === ""){
      str+=i
    }
    console.log(str)
  }
})();


//not fully functional solution
// (function (){
//   for (let i =1; i<=100; i++){
//  if(i % 3 === 0) console.log('fizz');
//  else if(i % 7 === 0) console.log('buzz');
//  else console.log(i);
//   }
// })();

//better solution