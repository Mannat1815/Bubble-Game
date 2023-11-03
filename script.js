function Makebubble(){
let clutter = "";
for(let i=0;i<65;i++){
    let ran = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${ran}</div>`;
}
document.querySelector(".bub").innerHTML=clutter;
}
var time = 60;
function runTimer(){
   let interval =  setInterval(function(){
        if(time>0){
            time--;
            document.querySelector("#timer").textContent = time;
        }
        else{
            document.querySelector(".bub").innerHTML = `<h1>Game Over</h1>` ;
            clearInterval(interval)
        }

    },1000);
}
let rn = 0
function getHit(){
    rn=Math.floor(Math.random()*10);
    document.querySelector("#hitint").textContent = rn ;
}
 let score=0;
function increaseScore(){
    score+=5;
    document.querySelector("#score").textContent = score ;

}
document.querySelector(".bub").addEventListener("click",function(dets){
    if(Number(dets.target.textContent==rn)){
        increaseScore();
        Makebubble();
        getHit();

    }
})
Makebubble();
runTimer();
getHit();