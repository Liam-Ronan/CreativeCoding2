
function setup() {
    createCanvas(500,500);
    background(0);

    var balls = [];

    for(let i = 0; i < 100; i++) {
        let ball = new Balls();
        balls.push(ball);
        stroke(255)

        ball.render()
    }

    for(let x = 0; x < balls.length; x++) {
        for(let i = x+1; i < balls.length; i++) {
            let diffX = int(balls[x].x - balls[i].x);
            let diffY = int(balls[x].y - balls[i].y);

            let distance = Math.sqrt((diffX * diffX) + (diffY * diffY))
            console.log(distance);
        }
    }
    let ballsMap = balls.map(ball => {
        let diffX = int(ball.x - ball.x);
        let diffY = int(ball.y - ball.y);

        
        return Math.sqrt((diffX * diffX) + (diffY * diffY))
    })

    console.log(ballsMap)
}
