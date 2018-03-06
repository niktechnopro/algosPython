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
var promiseOne = fetch(URL)
.then(response=>response.json())
.then(data=> orderRetrieval(data))
.catch(error=>console.log(error))

console.log(promiseOne)
// orderRetrieval(data);


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
                ulelement.style.backgroundColor = 'lightgreen';
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
    // console.log('to server initiated', order)
    data = JSON.stringify(order);
    var promiseTwo = fetch(URL,{
        method: 'POST',
        headers: new Headers({ //constructor-creates new headers
            'Content-Type': 'application/json'
            }),
        body: data
        })
    console.log(promiseTwo)
    promiseTwo.then(response => response.json())//.json()-parses response to json
    .then(data => orderPublisher(data))
    .catch(error => console.log(error)) 
    //aparently unlike AJAX - it does not retrieve request from server, but
    //returns just what I put in. Also it needs data to be
    //JSON stringified, while AJAX does it automatically  
}

function deleteFromServer(keytodelete){//delete order function
    console.log('delete function fired up', keytodelete);
    let deleteURL = URL+'/'+keytodelete;
    return fetch(deleteURL,{
            method: 'DELETE'
        })
}

function orderRetrieval(data){
    let keys = Object.keys(data);
    keys.forEach((key)=>{
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
