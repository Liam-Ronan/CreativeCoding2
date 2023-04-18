class Airplane {
    constructor(_speedX = 2, _speedY = -2, _posX, _posY, _altitude = 1000, _size = 0.5) {
        this.speedX = random(-2, 2);
        this.speedY =random(-2, 2);
        this.posX = random(10, 490);
        this.posY = random(10, 490);
        this.altitude = random(1000, 100000);
        this.size = random(0.5, 1.2);
    }

    render() {
        fill(255)
        noStroke()

        push()
            translate(this.posX,this.posY)
            beginShape();
            scale(this.size)
            let heading = atan2(this.speedY, this.speedX);
            rotate(heading + 90);
            vertex(0,0);
            vertex(apWidth / 2, apTailLength);
            vertex(0, -apHeight + apTailLength)
            vertex(-apWidth / 2, apTailLength)
            endShape(CLOSE);
        pop()
    }

    move() {
        this.posX += this.speedX;
        this.posY += this.speedY;

        if(this.posX > width) {
            this.posX = 0;
        }
        if(this.posX < 0) {
            this.posX = width;
        }
        if(this.posY > height) {
            this.posY = 0;
        }
        if(this.posY < 0) {
            this.posY = height;
        }
    }
}