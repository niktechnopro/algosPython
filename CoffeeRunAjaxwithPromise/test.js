var dataSet = getData();//whatever getData() returns - get set to variable dataSet

// creating matrix of arrays
function init(x,y){//y-rows, x-columns
  return Array(y).fill(null).map(row=>{
    return row = Array(x).fill(null).map((cell)=>{
      return cell = random()
    })
    // return row
  })
}

init(3,4)
function random(){
  return rand = Math.round(Math.random())
}

