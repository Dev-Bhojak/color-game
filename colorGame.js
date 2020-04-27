window.setTimeout(function(){

var numSquares =6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
    setupModeButton();
    setupSquare();
    reset();
}

function setupModeButton(){
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            // if (this.textContent ==="Easy"){
            //     numSquares = 3
            // }else{  
            //     numSquares = 6
            // }
            this.textContent === "Easy" ? numSquares= 3: numSquares= "6";
    
            reset();
            // figure out how many squares to show
            // pick new colors
            // pick a new picked color
            // update page to refelect changes
    
        });
    }
}

function setupSquare(){
    for(var i = 0; i < squares.length; i++){
        //initial color assign
        
    
        // click listener
        squares[i].addEventListener("click", function(){
           var clickedColor = this.style.backgroundColor;
    
           if (clickedColor === pickedColor){
               messageDisplay.textContent= "Correct!";
               resetButton.textContent ="Play again";
               changeColor(pickedColor);
               h1.style.backgroundColor =clickedColor;
                }else { this.style.backgroundColor = "#232323";
                        messageDisplay.textContent = "Try again";
            }
        })
    }
}


function reset(){
      // generate all new colors
      colors = generateRandomColor(numSquares);
      //pick a new color
      pickedColor = pickColor();
      
      colorDisplay.textContent = pickedColor;
      resetButton.textContent= "New Colors";
      messageDisplay.textContent ="";
  
      for(var i =0; i <squares.length; i++){
          if(colors[i]){
              squares[i].style.display = "block";
            squares[i].style.backgroundColor =colors[i];
          }else{
            squares[i].style.display ="none";
          }
          
      }
      h1.style.backgroundColor ="steelblue";
}

// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares =3;
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for( var i =0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }else{ 
//             squares[i].style.display = "none";}   
//     }
//     }
// );

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for( var i =0; i < squares.length; i++){
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//     }
// })


resetButton.addEventListener("click", function(){
   
    reset();

});

colorDisplay.textContent = pickedColor;






function changeColor(color){
    // loop through
    for(var i =0; i < squares.length; i++ ){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}


function generateRandomColor(num){
    //create arr
    var arr =[];
    // repeate num times

    for (var i = 0; i < num; i++){
    // get a randomenumebr and puch it into arrr
    arr.push(randomColor());
    }
    // call arr
    return arr;
}


function randomColor(){
    // pick a red from 0 to 255
    var r = Math.floor(Math.random()*256);
    // pick a green from 0-255
    var g = Math.floor(Math.random()*256);
    // pick a blue from 0-255
    var b = Math.floor(Math.random()*256);
    //**** */
    
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
















},500);

