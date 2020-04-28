var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var reset = document.querySelector("#reset");
var numInput = document.querySelector("input");

var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var maxVal = document.querySelector("#maxVal");

var score1 = 0;
var score2 = 0;
var maximum = 5;
var gameOver = false;

btn1.addEventListener('click',function(){
    if(!gameOver){
        score1++;
        player1.textContent = score1;
        if(score1 === maximum){
            gameOver = true;
            player1.classList.add("green");
        }
    }


})
btn2.addEventListener('click',function(){
    if(!gameOver){
        score2++;
        player2.textContent = score2;
        if(score2 === maximum){
            gameOver = true;
            player2.classList.add("green");
        }
    } 
   
})
reset.addEventListener('click',resetFunc);

numInput.addEventListener("change",function(){
    maxVal.textContent = numInput.value;
    maximum = Number(numInput.value);
    resetFunc();

})

function resetFunc(){
    gameOver = false;
    score1=0;
    player1.textContent = score1; 
    score2=0;
    player2.textContent = score2;  
    player1.classList.remove("green");  
    player2.classList.remove("green");  
}