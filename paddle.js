export default class Paddle {

    constructor() {
        let x  = canvas.width/2
        let y = canvas.height - 30;
        let width = 80;
    }

    drawPaddle(){
        ctx.beginPath()
        ctx.fillStyle = "red"; 
        ctx.fill();
        ctx.closePath()
    }
}