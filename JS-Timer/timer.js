console.log('sanity check')
var countInt;
var submitBut = document.getElementById('submitButton');
var restartBut = document.getElementById('resetButton');
submitButton.addEventListener('click', start);
restartBut.addEventListener("click", reset);

function start(){
    var seconds = document.getElementById('timeChoseSeconds').value
    var minutes = document.getElementById('timeChoseMinutes').value
    document.getElementById('timerSeconds').textContent = ("00" + seconds).slice(-2);
    document.getElementById('timerMinutes').textContent = ("00" + minutes).slice(-2);
    counter(parseInt(minutes), parseInt(seconds))
}
        
var counter = function(minutes, seconds){
    submitButton.removeEventListener('click', start)
    console.log('received from addEventListener')
    console.log(minutes, seconds)
    countInt = setInterval(()=>{
        if (seconds != 0){
            seconds -= 1
        }else if(seconds == 0 && minutes != 0){
            seconds = 59
            minutes -= 1
        }else{
            console.log('we need to reset interval');
            clearInterval(countInt);
            submitButton.addEventListener('click', start)
            return
        }
            document.getElementById('timerSeconds').textContent = ("0" + seconds).slice(-2);
            document.getElementById('timerMinutes').textContent = ("0" + minutes).slice(-2);   
        }, 10)
    
}

function reset(){
    console.log('restart button pressed')
    clearInterval(countInt)
    document.getElementById('timeChoseSeconds').value = 0;
    document.getElementById('timeChoseMinutes').value = 0;
    document.getElementById('timerSeconds').textContent = '00';
    document.getElementById('timerMinutes').textContent = '00';
    submitButton.addEventListener('click', start)
}

    