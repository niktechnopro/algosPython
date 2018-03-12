//function factorialize(num) {
//  if (num === 0){  
//     return 1;
//  }
//  return num * factorialize(num -1);
//}
console.log(factorialize(5));
//factorial without recursion version 1
//function factorialize(num) {
//    var start = num;
//    for (let i=1; i < start; i++){
//        if (num > 1){ 
//            num-=1
//            start = start * num;
//        }
//    }
//    return start;
//}
//version 3
function factorialize(num){
    for (var i = 1; 1<= num; num--){//note use of var - as variable must be accessed outside of for clause
        i = i * num;
    }
    return i;
}


