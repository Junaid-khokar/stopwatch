let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let miliSeconds = document.getElementById('miliSecond');
let mS = 0 ;
let S = 0 ;
let M = 0 ;
const P = document.getElementById('pause');
var i ,C;
let strt = document.getElementById("start");
let lap = document.getElementById("lap-item");
// let newLap ;
let count = 1 ;
let space = "   " ;

document.addEventListener('click' ,(e)=>{

    if(e.target.innerText == "START")
    {
        strt.innerText = "RESET" ;
        start();
    }
    else if(e.target.innerText == "PAUSE" && mS!=0)
    {
        clearInterval(i);
        P.innerText = "RESUME" ;
    }
    else if(e.target.innerText == "RESUME")
    {
        start();
        P.innerText = "PAUSE" ;
    }
    else if(e.target.innerText == "RESET")
    {
        M = 0 ;
        mS = 0 ;
        S = 0 ;
        strt.innerText = "START" ;
        P.innerText = "PAUSE" ;
        clearInterval(i);
        miliSeconds.innerText = "00" ;
        seconds.innerText = "00" ;
        minutes.innerText = "00" ;
    }
    else if(e.target.innerText == "LAP" && mS!=0)
    {
      var newLap = document.createElement('div');
      newLap.classList.add('lap');
       C = document.getElementsByClassName('lap');
       lap.appendChild(newLap);
       newLap.innerText = count +'.)   '+minutes.innerText+':'+seconds.innerText+':'+miliSeconds.innerText;
       count++ ;
    }
    else if(e.target.innerText == "CLEAR ALL")
    {
        lap.innerHTML = "" ;
        count = 1 ;
    }
})

function start()
{
    i =  setInterval(function(){
        mS++;
        if(mS>99)
        {
            if(S>=59)
            {
                    M++; 
                    S = -1 ;
                if(M<=9)
                    minutes.innerText = '0'+ M ;
                else
                    minutes.innerText =  M ;
            }
            mS = 0 ;
            S++;
            if(S<=9)
                seconds.innerText = '0'+ S ;
            else
                seconds.innerText =  S ;
        }
            
            if(mS<=9)
            miliSeconds.innerText = '0'+ mS ;
            else
            miliSeconds.innerText = mS ;
    },10);
}
