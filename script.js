window.onload = function (){


    var min = 00;
    var seconds = 00;
    var tens = 00;
    var appendMin = document.getElementById("min");
    var appendSeconds = document.getElementById("seconds");
    var appendTens = document.getElementById("tens");
    var btnStart = document.getElementById("go");
    var btnStop = document.getElementById("pause");
    var btnReset = document.getElementById("clear");
    var interval;

    btnStart.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer,10);
    }

    btnStop.onclick = function (){
        clearInterval(interval);
    }

    btnReset.onclick = function (){
        clearInterval(interval);
        min = "00";
        tens = "00";
        seconds = "00";

        appendMin.innerHTML = min;
        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
    }

    function startTimer() {
        tens++;
        if(tens <=9){
            appendTens.innerHTML = "0" + tens;
        }

        if(tens> 9){
            appendTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if(seconds >9){
            appendSeconds.innerHTML = seconds;
        }

        if(seconds > 59){
            min++;
            appendMin.innerHTML = "0" + min;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }

    }

}