function clock(){
    const now=new Date();
    hours=now.getHours().toString().padStart(2,0);
    med=hours>=12?"PM":"AM";
    hours=hours%12||12;
    minutes=now.getMinutes().toString().padStart(2,0);
    seconds=now.getSeconds().toString().padStart(2,0);
    time=`${hours}:${minutes}:${seconds}:${med}`;
    document.getElementById("clock").textContent=time;
 }
 clock();
 setInterval(clock,1000);