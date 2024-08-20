const choise=["Rock","paper","scissors"];
const displayplayer=document.getElementById("displayplayer");
const displaycomputer=document.getElementById("displaycomputer");
const displayresult=document.getElementById("displayresult");
const playerscore=document.getElementById("playerscore");
const playercomputer=document.getElementById("playercomputer");
let playercounter=0;
let coumputercounter=0;
function playgame(player){
      const computerplayer=choise[Math.round(Math.random()*2)];
      let result="";
      if(computerplayer===player){
        result="it is tie";
      }
      else{
        switch(player){
            case "Rock":
                result=computerplayer==="scissors"? "YOU WIN !!!":"YOU LOSS !!!";
                break;
            case "paper":
                result=computerplayer==="Rock"? "YOU WIN !!!":"YOU LOSS !!!";
                break;
            case "scissors":
                result=computerplayer==="paper"? "YOU WIN !!!":"YOU LOSS !!!";
                break;
        }
      }
      displayresult.classList.remove("green","red");
        switch(result){
              case "YOU WIN !!!":
                  displayresult.classList.add("green");
                  playercounter++;
                  playerscore.textContent=playercounter;
                  break;
              case "YOU LOSS !!!":
                  displayresult.classList.add("red");
                  coumputercounter++;
                  playercomputer.textContent=coumputercounter;
                  break;
        }
        displayplayer.textContent= `${player}`;
        displaycomputer.textContent=`${computerplayer}`;
        displayresult.textContent=`${result}`;
}