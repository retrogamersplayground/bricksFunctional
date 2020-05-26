export default class Ball {
    constructor() {
        let x  = canvas.width/2
        let y = canvas.height/2;
        let ballRadius = 10;

        let dy = +2;
    }

    drawBall(ctx){
        ctx.beginPath()
        ctx.arc(x , y , ballRadius , 0 , Math.PI * 2 )
        ctx.fillStyle = "blue"; 
        ctx.fill();
        ctx.closePath()
    }
}