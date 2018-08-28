document.addEventListener('DOMContentLoaded', function(){

console.log ('joanna is connected')

const canvas = document.getElementById("button");
canvas.addEventListener('click', function () {
    beginGame ()
})

const box = 32;

function beginGame() {

let snake = [];
 
snake[0] = {
    x : 9 * box,
    y : 10 * box
    };
 
    // create the food
         
    let food = { 
    x : Math.floor(Math.random()*17+1) * box,  
    y : Math.floor(Math.random()*15+3) * box  
    }
     
      
     
    // create the score var
      
    let score = 0;
      
    //control the snake
     
    let d;
      
    document.addEventListener("keydown",direction);
    function direction(event){
     
    let key = event.keyCode;
     
    if( key == 37 && d != "RIGHT"){
     
    left.play();
     
    d = "LEFT";
     
    }else if(key == 38 && d != "DOWN"){
     
    d = "UP";
     
    up.play();
     
    }else if(key == 39 && d != "LEFT"){
     
    d = "RIGHT";
     
    right.play();
     
    }else if(key == 40 && d != "UP"){
     
    d = "DOWN";
     
    down.play();
     
    }
     
    }
     
      
     
    // cheack collision function
     
    function collision(head,array){
     
    for(let i = 0; i < array.length; i++){
     
    if(head.x == array[i].x && head.y == array[i].y){
     
    return true;
     
    }
     
    }
     
    return false;
     
    }
     
      
     
    // draw everything to the canvas
     
      
     
    function draw(){
     
    ctx.drawImage(ground,0,0);
     
    for( let i = 0; i < snake.length ; i++){
     
    ctx.fillStyle = ( i == 0 )? "green" : "white";
     
    ctx.fillRect(snake[i].x,snake[i].y,box,box);
     
    ctx.strokeStyle = "red";
     
    ctx.strokeRect(snake[i].x,snake[i].y,box,box);
     
    }
     
    ctx.drawImage(foodImg, food.x, food.y);
     
    // old head position
     
    let snakeX = snake[0].x;
     
    let snakeY = snake[0].y;
     
    // which direction
     
    if( d == "LEFT") snakeX -= box;
     
    if( d == "UP") snakeY -= box;
     
    if( d == "RIGHT") snakeX += box;
     
    if( d == "DOWN") snakeY += box;
     
    // if the snake eats the food
     
    if(snakeX == food.x && snakeY == food.y){
     
    score++;
     
    eat.play();
     
    food = {
     
    x : Math.floor(Math.random()*17+1) * box,
     
    y : Math.floor(Math.random()*15+3) * box
     
    }
     
    // we don't remove the tail
     
    }else{
     
    // remove the tail
     
    snake.pop();
     
    }
     
    // add new Head
     
    let newHead = {
     
    x : snakeX,
     
    y : snakeY
     
    }
     
    // game over
     
    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
     
    clearInterval(game);
     
    dead.play();
     
    }
     
    snake.unshift(newHead);
     
    ctx.fillStyle = "white";
     
    ctx.font = "45px Changa one";
     
    ctx.fillText(score,2*box,1.6*box);
     }
    }

// for (i = 0; i < size; i++) {
//     var backgroundDiv = document.createElement('div','row')
//     var background = document.getElementById("background")
//     background.appendChild(backgroundDiv)
//         }
//     }
// })

// const canvasWidth = 500;
// const canvasHeight = 400;

// function boarders() {
//     for (var y=0; y< canvasHeight; ++y) {
//         for (var x=0; x> canvasWidth; ++x) { }
//     }
// }
// boarders()

// function beginGame() {
//     snakeX = Math.floor(canvasWidth/2);
//     snakeY = Math.floor(canvasHeight/2);

// }

// const box = 30;
// const foodImg = new Image();
// foodImg.src = "/assets/donuts.png"
// var food = {
//     x : Math.floor(Math.random()*20) * box,
//     y : Math.floor(Math.random()*20) * box
// }
// function (){
// ctx.drawImage(foodImg)}

// snake[0] = {
//     x : 9 * box,
//     y : 10 * box
// };

// function drawSnake() {
//     snake = [];
//     for (var i = 0; i< snake.length; i++) {
//         ctx.fillStyle = green;
//     }  
// }
// beginGame()
// drawSnake()

// // create the food


// // load audio files

// let dead = new Audio();
// let food = new Audio();

// dead.src = "audio/dead.mp3";
// food.src = "audio/eat.mp3";


  
// // create the food



// //direction of the snake
//     keyboard.Keymap = {
//         37: 'left',
//         38: 'up',
//         39: 'right',
//         40: 'down'
//       };

// document.addEventListener("keydown",direction);

// function direction(){
//     var key = event.keyCode;
//     if( key == 37 ){
//         left.play();
//     }
//     else if(key == 38){
//         up.play();
//     }else if(key == 39){
//         right.play();
//     }else if(key == 40){
//         down.play();
//     }
// }

// // cheack collision function
// function collision(head,array){
//     for(let i = 0; i < array.length; i++){
//         if(head.x == array[i].x && head.y == array[i].y){
//             return true;
//         }
//     }
//     return false;
// }

// // draw everything to the canvas

// function draw(){
    
//     ctx.drawImage(ground,0,0);
    
//     for( let i = 0; i < snake.length ; i++){
//         ctx.fillStyle = ( i == 0 )? "green" : "white";
//         ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
//         ctx.strokeStyle = "red";
//         ctx.strokeRect(snake[i].x,snake[i].y,box,box);
//     }
    
//     ctx.drawImage(foodImg, food.x, food.y);
    
//     // old head position
//     let snakeX = snake[0].x;
//     let snakeY = snake[0].y;

    
//     // if the snake eats the food
//     if(snakeX == food.x && snakeY == food.y){
//         score++;
//         eat.play();
//         food = {
//             x : Math.floor(Math.random()*20) * box,
//             y : Math.floor(Math.random()*20) * box
//         }
//         // we don't remove the tail
//     }else{
//         // remove the tail
//         snake.pop();
//     }
    
//     // add new Head
    
//     let newHead = {
//         x : snakeX,
//         y : snakeY
//     }
    
//     // game over
    
//     if(snakeX < box || snakeX > 20 * box || snakeY < 3*box || snakeY > 20*box || collision(newHead,snake)){
//         clearInterval(game);
//         dead.play();
//     }
    
//     snake.unshift(newHead);
    
//     ctx.fillStyle = "white";
//     ctx.font = "45px Changa one";
//     ctx.fillText(score,2*box,1.6*box);
// }

// // call draw function every 100 ms

// let game = setInterval(draw,100);

// // restart game

// var restart = document.getElementById('button') 
// restart.addEventListener('click', function(){
//         document.location.reload()
//     })


// })
