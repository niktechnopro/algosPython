console.log('sanity check');
//global variables
var form = document.querySelector('[data-coffee-order="form"]');
var submit = document.querySelector('[type="submit"]');
var reset = document.querySelector('[type="reset"]');
var divelement = document.querySelector('#order');
var emailRegExp = /^[a-zA-Z0-9._#!&%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//event listeners
submit.addEventListener('click', validation);
reset.addEventListener('click', orderFormReset);

//array to hold all orders
var orders = new Array();

//checking if localStorage is empty
var item = localStorage.getItem('orders');
console.log(item)
if (item){
    fromStorage(item)
}

function validation(e){//validation for coffeeOrder and Email
    e.preventDefault();
    let email = $('[type = "email"]').val().trim();
    let coffeeOrder = $('#coffeeOrder').val().trim();
    if (coffeeOrder == ''){
        console.log('coffeeOrder field is empty');
        $('#coffeeOrder').val('this field can not be empty').css('color', 'red');
        $('#coffeeOrder').on('focus', function(){
            $(this).val('').css('color', 'black')
        })
    }else if (email == '' || !email.match(emailRegExp)){
        console.log('incorrect email')
        $('[type="email"]').val('please provide correct email').css('color','red');
        $('[type="email"]').on('focus', function(){
            $(this).val('').css('color', 'black')
        })
    }else{
        orderReader();
    }
}

function orderReader(){
    let order = {}; //object to hold the order
    console.log('submit button pressed');//sanity check
    let fields = $('form').serializeArray();//this reads all info from form fields
    // console.log(fields)// and returns it as an array
    form.reset(); // reset all fields after reading them
    fields.forEach((value, index)=>{
        order[value.name] = value.value;//creating an object with our order
    })
    orderPublisher(order); //appending orders to the screen
}

function orderPublisher(order){
    let ulelement = document.createElement('ul')
    var deleteButton = document.createElement('button');
    let deleteText = document.createTextNode('Completed');
    let orderText = document.createTextNode(`New order  `)
    divelement.appendChild(ulelement);
    ulelement.appendChild(orderText);
    ulelement.appendChild(deleteButton);
    deleteButton.setAttribute('order', `${order[Object.keys(order)[0]]}`)
    deleteButton.appendChild(deleteText);
    orders.push(order) //saving orders into array
    deleteButton.addEventListener('click', ()=>{
        var pointer = deleteButton.getAttribute('order');
        console.log(pointer)
        orders.forEach((val, i)=>{ //to remove the right index from orders array
            if (val.coffee == pointer){
                orders.splice(i,1)
            }
        })
        ulelement.remove();//removing the element  
        intoStorage(orders);
    })
    let keys = Object.keys(order); //extracting keys from object
    keys.forEach((key)=>{
        let lielement = document.createElement('li');
        ulelement.appendChild(lielement);
        let textRow = document.createTextNode(`${key} : ${order[key]}`)
        lielement.appendChild(textRow);
    })
    intoStorage(orders);
}

function intoStorage(orders){
    console.log("intoStorage invoked")
    let storage = JSON.stringify(orders);
    localStorage.setItem('orders',storage);
}

function fromStorage(saved){
    console.log("from Storage invoked", saved);
    let savedOrders = JSON.parse(saved);
    console.log(savedOrders)
    savedOrders.forEach((order)=>{
        orderPublisher(order)
    })
}

function orderRetrieval(){

}

function orderFormReset(e){
    e.preventDefault();
    console.log('reset button pressed');
    form.reset();
}
