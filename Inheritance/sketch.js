let balls = [];

function setup() {
    createCanvas(500, 500)
    background(200)

    for(let i = 0; i < 10; i++) {

        let randomNumber = floor(random(0, 2));

        if(randomNumber == 0) {
            balls.push(new Ball());
        }
        else {
            balls.push(new TennisBall());
        }
        
    }
}

function draw() {
   balls.forEach(ball => {
        ball.render();
   });
}