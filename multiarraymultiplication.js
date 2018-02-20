var matrixMultiply = function (matrixA, matrixB) { 
    result = []
    console.log('matrixA', matrixA);
    console.log('matrixB', matrixB);
    for (let i=0; matrixA.length > i; i++){
      result[i] = []
      for (let j=0; matrixB.length > j; j++){
        var sum = 0
        for (let k = 0; k < matrixB[0].length; k++) { 
            sum += matrixA[i][k] * matrixB[k][j];
        }
        result[i][j] = sum
      }
    }
  return result
}                                                                               
                                                                                
console.log(matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]));

/*idea as follows
for row (3 times)
  for column(4 times)
    for pair(2 times)
*/