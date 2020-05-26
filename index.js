let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


let x  = canvas.width/2
let y = canvas.height/2;
let ballRadius = 10;
let dy = +1;
let dx = 0;
let paddleX =  x - 32.5;
let paddleY =  canvas.height - 20;


let leftPressed =  false;
let rightPressed = false;



document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}



function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

// const randomColor = Math.floor(Math.random()*16777215).toString(16);

 function drawBall(){
     ctx.beginPath()
     ctx.arc(x , y , ballRadius , 0 , Math.PI * 2 )
     ctx.fillStyle = "white"; 
     ctx.fill();
     ctx.closePath()
 }

function drawPaddle() {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(paddleX , paddleY ,  65 , 5);
    ctx.closePath();
}

// function drawBlock() {
//     ctx.beginPath();
//     ctx.rect(0, 0, 40, 40);
//     ctx.fillStyle = '#' + randomColor;
//     ctx.fill();
//     ctx.lineWidth = 2;
//     ctx.strokeStyle = "gray";
//     ctx.stroke();
//     ctx.closePath();
// }

function gameOver() {
    if(y === canvas.height) {
        alert('gameOver');
    }
}

function bounce() {
    if(y + ballRadius === paddleY && x > paddleX && x < (paddleX + 65)) {
        dy -= 1;
        dx += .5;
    } else if(y - ballRadius === canvas.height - 600) {
        dy += 1;
    }
}

function draw(){
    ctx.clearRect(0, 0, canvas.width , canvas.height)
    drawBall()
    drawPaddle()
    bounce()
    gameOver()
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    /*if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }*/
    if(leftPressed){
        paddleX -= 5;
    }
    else if(rightPressed){
        paddleX +=5
    }
    //drawBlock()
    y += dy
    x += dx
    requestAnimationFrame(draw)
}



requestAnimationFrame(draw)




// ctx.clearRect(0, 0, 800, 600); //clear between frame

// ctx.fillStyle = "#00FF00";

// ctx.fillRect(395, 295, 10, 10); //ball

// ctx.fillRect(360, 550, 80, 10); // paddle
// ctx.fillRect(0, 0, 40, 40); // brick

