document.addEventListener('DOMContentLoaded', function(){
    console.log ('joanna is connected')
    
//when someone clicks on start the game begins
    
    var button = document.querySelector('.button')
    button.addEventListener('click', startGame) 
   

const board = [];
const backWidth = 20, backHeight = 20;

var locationX;
var locationY;
var snakeLength = 1;
var food_x
var food_y

// Create different div and append in the pixel object. Then append on the background.
function startGame(evt) {
    evt.preventDefault() 

    const background = document.getElementById('board');
        for (var y = 0; y < backHeight; ++y) {
            var list = [];

                for (var x = 0; x < backWidth; ++x) {
                var pixel = {};
                pixel.element = document.createElement('div');
                background.appendChild(pixel.element);
                list.push(pixel);
            }
            board.push(list);
        }
        snakeStart() 
    }
// create a function that will place snake in the middle of the background
function snakeStart() {
        locationX = Math.floor(backWidth / 2);
        locationY = Math.floor(backHeight / 2);

        board[locationY][locationX].snake = snakeLength;
        board[locationY][locationX].element.style.backgroundColor = 'blue'

        Food();
        Loop();
                // // Update every 700 miliseconds
                // setTimeout(Loop, 700);
        
    }


// create a function that will place food in a random position
    function Food() {
        food_x = Math.floor(Math.random() * backWidth);
        food_y = Math.floor(Math.random() * backHeight);

        board[food_y][food_x].food = 1;
        board[food_y][food_x].element.style.backgroundColor = 'red'
        
    }

// create a function that will loop the game
    function Loop() {
        console.log(board[food_y][food_x],board[locationY][locationX])

        // If snake goes on the wall then game over alert!
        if ((locationX < 0 || locationX >= backWidth ) || (locationY <0 || locationY>= backHeight) )
        {
            window.alert('GAME OVER');
        }
        // if snake eats the food adds to its length and another food is placed - using the Food function
        else if (board[food_y][food_x].food == board[locationY][locationX].snake ) 
        {
            snakeLength++;
            board[locationY][locationX].snake = 0;
            Food();
        }
        // New snake location
        console.log(board[locationY][locationX])
        board[locationY][locationX].snake = snakeLength;

        // Loop over the background, and update every pixel
        for (var j = 0; j < backHeight; ++j) {
            for (var i = 0; i < backWidth; ++i) {
                var pixel = board[j][i];

                if (pixel.snake > 0) {
                    pixel.element.className = 'snake';
                    pixel.snake -= 1;
                }
                else if (pixel.food === 1) {
                    pixel.element.className = 'food';
                }
                else {
                    pixel.element.className = 'none';
                }
            }
        }
    }


// keyboard to move my snake   
    Keymap = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
                };
            
        document.addEventListener("keydown", function keyboard(event){
            var Keymap = event.keyCode;
            console.log(Keymap)
            if (Keymap == 37) {
                locationX--;
                console.log(locationX)
                Loop()
            }
            else if (Keymap == 39) {locationX++; 
                console.log(locationX);
                Loop()}
            else if (Keymap == 40) {locationY++; Loop()}
            else if (Keymap == 38) {
                locationY--; 
                console.log(locationY);
                Loop()
             }
        });
            
    })
