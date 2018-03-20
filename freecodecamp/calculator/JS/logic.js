var arrayOperation = [];
var buttons = document.querySelector('#buttons');
var display = document.querySelector('input');
buttons.addEventListener('click', valueReader);
var number = '';
var express = document.getElementById('express');
console.log(express)

function valueReader(e){
  let val = e.target.value;
  // console.log('button pressed', val)
  if (val !== undefined){
    display.value = val;
    logic(val);
    }
}

function logic(value){
  switch(true){
      case /\d/.test(value):; 
      number += value;
      display.value = number;
      break;
      case /[-+/*]/.test(value):
        console.log('operator', value)
      if (number !== ''){
        arrayOperation.push(Number(number));
      }
      if (arrayOperation.length > 0){
        arrayOperation.push(value); 
      }
      number = '';
      break;
    case /=/.test(value):
        let result;
        if(arrayOperation.length >= 2){//checking for double operator
        arrayOperation.push((number))
        console.log(arrayOperation)
        //choosing operator - we do it here
        let result = operation(arrayOperation)
        // end of choosing operator
        arrayOperation = [];
        display.value = result;
        number = '';
      }else{
        display.value = 0;
        number = '';
      }
      break;
    case /\./.test(value):
      display.value = number + '.';
      number += '.';
      break;
    case /CE/.test(value):
      display.value = '0'
      if (arrayOperation.length == 1 || arrayOperation.length >= 3){
        arrayOperation.pop();
      }else if(arrayOperation.length == 2){
        display.value = '';
        number = '';
      }
      number = '';
      break;
    case /C/.test(value):
      display.value = '0';
      arrayOperation = [];
      number = '';
      express.textContent = '';
      break;
  }
  console.log(arrayOperation)
}


function operation(data){
  let expression = '';
  data.forEach((element, index)=>{
    expression += element
  })
  let p = document.createElement('p');
  let textNode = document.createTextNode(expression+'='+`${eval(expression).toFixed(2)}`)
  express.appendChild(p);
  p.appendChild(textNode);
  if (eval(expression) == parseInt(eval(expression))){
    return (eval(expression))
  }else{
    return (eval(expression).toFixed(2))
  }
}