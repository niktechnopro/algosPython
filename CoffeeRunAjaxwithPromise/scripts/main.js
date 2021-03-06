console.log('sanity check');
//global variables
var form = document.querySelector('[data-coffee-order="form"]');
var submit = document.querySelector('[type="submit"]');
var reset = document.querySelector('[type="reset"]');
var divelement = document.querySelector('#order');
var emailRegExp = /^[a-zA-Z0-9._#!&%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var URL = "https://dc-coffeerun.herokuapp.com/api/coffeeorders";

//event listeners
submit.addEventListener('click', validation);
reset.addEventListener('click', orderFormReset);

//array to hold all orders
var orders = new Array();

//checking for info on server and fetching the data
var promiseOne = $.get(URL)
console.log(promiseOne)
    // orderRetrieval(data);
promiseOne.then(result => orderRetrieval(result))


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
    console.log(fields)// and returns it as an array
    form.reset(); // reset all fields after reading them
    fields.forEach((value, index)=>{
        order[value.name] = value.value;//creating an object with our order
    })
    toServer(order)//sending to server
}

function orderPublisher(order){
    // console.log(order)
    var ulelement = document.createElement('ul')
    var deleteButton = document.createElement('button');
    let deleteText = document.createTextNode('Completed');
    let orderText = document.createTextNode(`New order  `)
    divelement.appendChild(ulelement);
    ulelement.appendChild(orderText);
    ulelement.appendChild(deleteButton);
    deleteButton.setAttribute('order', `${order.coffee}`)
    deleteButton.appendChild(deleteText);
    orders.push(order) //saving orders into array
    deleteButton.addEventListener('click', ()=>{
        var pointer = deleteButton.getAttribute('order');
        console.log(pointer)
        orders.forEach((val, i)=>{ //to remove the right index from orders array
            if (val.coffee == pointer){
                ulelement.style.backgroundColor = 'green';
                deleteFromServer(orders[i].emailAddress).then(function(){
                    elementRemove(ulelement);
                }).then(function(){
                    orders.splice(i,1);
                })
            }
        })
    })
    let keys = Object.keys(order); //extracting keys from object
    keys.forEach((key)=>{
        let lielement = document.createElement('li');
        ulelement.appendChild(lielement);
        let textRow = document.createTextNode(`${key} : ${order[key]}`)
        lielement.appendChild(textRow);
    })  
}

function toServer(order){
    console.log('to server initiated', order)
    var promiseTwo = $.post(URL, order)
    // console.log(promiseTwo)
    promiseTwo.then(response => orderPublisher(response))   
}

function deleteFromServer(keytodelete){//delete order function
    console.log('delete function fired up', keytodelete);
    let deleteURL = URL+'/'+keytodelete;
    return $.ajax({ //we need to use 'return' to return the promise
        url: deleteURL,
        method: 'DELETE',
        success: function(resp){
                    console.log('response from DELETE method', resp)
                }
    })
}

function orderRetrieval(data){
    let keys = Object.keys(data);
    keys.forEach((key)=>{
        // console.log(data[key].coffee)
        orderPublisher(data[key]);
    })
}

function orderFormReset(e){
    e.preventDefault();
    console.log('reset button pressed');
    form.reset();
}

function elementRemove(ulelement){
    setTimeout(function(){ulelement.remove()}, 2000)
}
