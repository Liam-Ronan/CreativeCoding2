
class Ball {
    constructor() {
        this.pos = createVector(random(0, width), random(0, height))
    }

    render() {
        stroke(0)
        noFill()
        ellipse(this.pos.x, this.pos.y, 30,30)
    }
}

class TennisBall extends Ball{

    constructor() {
        super();
        this.brand = "Nike";
    }

    render() {
        super.render()
        noStroke();
        fill(0,255,0)
        rect(this.pos.x, this.pos.y, 10,10)
        
    }

    makeBounce() {
        console.log("im bouncing");
    }
}