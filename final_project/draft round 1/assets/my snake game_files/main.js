document.addEventListener('DOMContentLoaded', function(){
    console.log ('joanna is connected')

// when someone clicks on start the game begins

    var button = document.querySelector('.button')
    button.addEventListener('click', function (evt) {  
         evt.preventDefault()
         //code goes here
        

    })
})


// grab background and snake pixel (from css) and create a snake div on DOM. 
// Attach div on background.
var background = document.getElementById("background")
var snake = document.getElementById('snake')
    snake.createElement('div')
    snake.classList.add('snake')
    background.appendChild(snake)


// add a pixel of food on DOM
var food = document.querySelector(".food")
    food = document.createElement('')
    food.classList.add('food')
    background.appendChild(food)

// when snake eats the food I want to add a div on snake class
function eating (){
    for(let i = 0; i < snake.length; i++){
        
        snake.appendChild(food)
    }
}
eating()

//keyboard
keyboard.Keymap = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
    };

document.addEventListener("keydown",direction);

function direction(event){
    if( event.keyCode == 37){
        left.play();
    }else if(key == 38){
        up.play();
    }else if(key == 39){
        right.play();
    }else if(key == 40){
        down.play();
    }
}
