
class Ball {
    constructor(_posX, _posY, _speedX, _speedY, _size) {
        this.posX = random(0, 500);
        this.posY = random(0, 500);
        this.speedX = _speedX;
        this.speedY = _speedY;
        this.size = random(0, 50);
    }

    drawBall() {
        fill(255);
        noStroke();
        ellipse(this.posX, this.posY, 50, 50)
    }

    moveBall() {
        this.posX += this.speedX;
        this.posY += this.speedY;
    }
}