class Airplane {
    constructor(_velocity, _pos = createVector(random(0, width), random(0, height)), _altitude = 1000) {
        this.velocity = createVector(random(-2, 2), random(-2, 2)) ;
        this.pos = _pos;
        this.altitude = random(1000, 100000);
    }

    drawPlane() {
        fill(255);
        noStroke();

        push()
            translate(this.pos.x,this.pos.y);
            beginShape();
                rotate(this.velocity.heading() + 90);
                vertex(0,0);
                vertex(apWidth / 2, apTailLength);
                vertex(0, -apHeight + apTailLength);
                vertex(-apWidth / 2, apTailLength);
            endShape(CLOSE);
        pop()
    }

    move() {
        this.pos.add(this.velocity);

        if(this.pos.x > width) {
            this.pos.x = 0;
        }
        if(this.pos.x < 0) {
            this.pos.x = width;
        }
        if(this.pos.y > height) {
            this.pos.y = 0;
        }
        if(this.pos.y < 0) {
            this.pos.y = height;
        }
    }
}