var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var numSquares = 6;

init();

function init(){
    resetButton.addEventListener("click",function(){
        reset();
    })
    for(var i = 0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
    
            if(this.textContent === "Easy"){
                numSquares = 3;
            }
            if(this.textContent === "Medium"){
                numSquares = 6;
            }
            if(this.textContent === "Hard"){
                numSquares = 9;
            }
            reset();
    
        })
    }

    for(var i=0;i<squares.length;i++){
    
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        })
    }
    reset();
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
            
        }
        else{
            squares[i].style.display = "none";
        }
       
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

function changeColors(color){
    for(var i = 0; i < squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]; 
}

function generateRandomColors(num){
    var arr = [];

    for(var i = 0; i < num; i++){
        randomColor = getRandomColor();
        arr.push(randomColor)
    }
    return arr;
}

function getRandomColor(){
    red   = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue  = Math.floor(Math.random() * 256);

    result = "rgb(" + red + ", " + green + ", " + blue + ")";

    return result;
}