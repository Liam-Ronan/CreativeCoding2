class Plane {
    constructor(afWidth,afHeight) {

        this.velocity = createVector(random(-1, 1), random(-1, 1));
        this.pos = createVector(random(-afWidth/2, afWidth/2), random(-afHeight/2, afHeight/2));
        this.afWidth = afWidth;
        this.afHeight = afHeight;
        this.altitude = Math.random() >= 0.5 ? 1000 : 2000;
        this.size = 0.3;
        this.alert = false;
    }

    render() {
        push()
        translate(this.pos.x, this.pos.y)
        if(this.alert == true) {
            stroke(0,0,0)
            noFill();
            ellipseMode(RADIUS)
            circle(0,0,40);
        }
        else {
            noStroke();
            noFill();
        }

        fill(255)
                beginShape()
                    rotate(this.velocity.heading() + 90);
                    scale(this.size)
                    vertex(0, 0)
                    vertex(apWidth / 2, apTail)
                    vertex(0, -apHeight)
                    vertex(-(apWidth / 2), apTail)
                    vertex(0, 0)
                endShape(CLOSE);
        pop()
    }

    step() {
        this.pos.add(this.velocity);
    }

    checkLimits(){
      
        if(this.pos.x > this.afWidth/2){ 
            this.pos.y = (map(this.pos.y, -this.afHeight, this.afHeight, this.afHeight, -this.afHeight ) )
            // console.log("yes");
            this.pos.x = -this.afWidth/2;
        }

        if(this.pos.x < -this.afWidth/2){ 
            this.pos.y = (map(this.pos.y, -this.afHeight, this.afHeight, this.afHeight, -this.afHeight ) )
            
            this.pos.x = this.afWidth/2;
        }
    
        if(this.pos.y > this.afHeight/2){ 
            this.pos.x = (map(this.pos.x, -this.afWidth, this.afWidth, this.afWidth, -this.afWidth) )
          
            this.pos.y = -this.afHeight/2;
        }

        if(this.pos.y < -this.afHeight/2){ 
            this.pos.x = (map(this.pos.x, -this.afWidth, this.afWidth, this.afWidth, -this.afWidth) )
          
            this.pos.y = this.afHeight/2;
        }
    }

    slower() {
        this.velocity.mult(0.2);
        // console.log("SLOWER");
    }

    faster() {
        this.velocity.mult(1.6);
        // console.log("Faster");
    }

    showLabels(str) {
        fill(255)
        textSize(16);
        text(str, this.pos.x - 15, this.pos.y - 15);
    }
    
}