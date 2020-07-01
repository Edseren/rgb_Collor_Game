 var colors = generateRandomColors(6);
//  [
//            "rgb(255, 0, 0)",
//            "rgb(255, 255, 0)",
//            "rgb(0, 255, 0)",
//            "rgb(0, 255, 255)",
//            "rgb(0, 0, 255)",
//            "rgb(255, 0, 255)",
// ]
var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButon = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }   
    }
});


hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
});

resetButon.addEventListener("click", function(){
    color = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"
    messagedisplay.textContent = "";
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
});





colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.background = colors[i];
    // add click liteners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.background;
        // compare the color to picked color
        if(clickedColor === pickedColor){
            messagedisplay.textContent = "Corect!!!";
            resetButon.textContent = "Play Again";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            } else {
                this.style.background = "#232323";
                messagedisplay.textContent = "Try Again";
        }
        });
}


function changeColors(color){
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}


function pickColor(){
    var  random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = []
    
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}


function randomColor() {
    var r = Math.floor(Math.random() * 256);

    var g = Math.floor(Math.random() * 256);

    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

