const display=document.getElementById("display");
let timer=null;
let ellipsTime=0;
let startTime=0;
let isRunning=false;
function start(){
 if(!isRunning){
    startTime=Date.now()-ellipsTime;
    timer=setInterval(update,10);
    isRunning=true;
 }
}
function stop(){
     clearInterval(timer);
     isRunning=false;
}
function reset(){
   clearInterval(timer);
    ellipsTime=0;
    startTime=0;
    isRunning=false;
    display.textContent=`00:00:00:00`;
}
function update(){
    let currentDate=Date.now();
    ellipsTime=currentDate-startTime;
    let hours=Math.floor(ellipsTime/(1000*60*60));
    let minutes=Math.floor(ellipsTime/(1000*60)%60);
    let second=Math.floor(ellipsTime/1000%60);
    let milsecons=Math.floor(ellipsTime%(1000/10));
    hours=hours.toString().padStart(2,0);
    minutes=minutes.toString().padStart(2,0);
    second=second.toString().padStart(2,0);
    milsecons=milsecons.toString().padStart(2,0);
    display.textContent=`${hours}:${minutes}:${second}:${milsecons}`;
}