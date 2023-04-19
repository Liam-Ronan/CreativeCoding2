let ball;
let ballsArray = [];

function setup() {
    createCanvas(400,400);
    background(0)
    // ball = new Ball(50,50,20,20);
    for(let i = 0; i < 10; i++) {
        ballsArray.push(new Ball(0.6,0.9))
    }
    console.log(ballsArray);
}

function draw() {
    background(0);
    ballsArray.forEach(ball => {
        ball.drawBall();
        ball.moveBall();
    });
}