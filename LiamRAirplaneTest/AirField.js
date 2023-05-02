
class AirField {
    constructor(afWidth,afHeight,num){
        this.planes = [];
        this.airFieldWidth = afWidth;
        this.airFieldHeight = afHeight;
        this.num = num;
        this.generatePlanes(this.num);
        this.color = color(255,0,0)
    }

    generatePlanes(num) {

        for(let i = 0; i < this.num; i++) {

            let randomNum = Math.floor(random(0, 2))
    
            if(randomNum == 0) {
                this.planes.push(new Plane(this.airFieldWidth,this.airFieldHeight))
            }
            else if(randomNum == 1) {
                this.planes.push(new Helicopter(this.airFieldWidth, this.airFieldHeight))
            }
            
        }
    }

    flyPlanes() {
        push()
        translate(width/2,height/2);
        noStroke()
        fill(this.color);
        rectMode(CENTER)
        rect(0,0,this.airFieldWidth,this.airFieldHeight);
        
        this.planes.forEach(plane => {
            plane.checkLimits();
            plane.step()
            plane.render()
            plane.showLabels(this.planes.indexOf(plane));

            plane.alert = false;
          });

          this.checkPlanes()
        pop()
    }


    checkPlanes(){
        // let seconds = text(frameCount, 100, 100)

        for(let i = 0; i < this.planes.length; i++) {
            for(let x = (i+1); x < this.planes.length; x++) {

                let plane1 = this.planes[i].pos;
                let plane2 = this.planes[x].pos;

                let distance = p5.Vector.sub(plane1, plane2)
                // console.log(distance);

                if(p5.Vector.mag(distance) < 40) {
                    this.planes[i].alert = true;
                    this.planes[x].alert = true;
                }
            }
        }
    }

}
    