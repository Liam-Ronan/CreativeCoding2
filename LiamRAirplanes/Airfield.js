
class Airfield {
    constructor(_width = 20, _height = 100, _posX = 15, _posY = 15) {
        this.width = _width;
        this.height = _height;
        this.posX = _posX;
        this.posY = _posY
    }

    createPlanes() {
        for(let i = 0; i < 5; i++) {

            let ranNum = floor(random(0, 1));

            if(ranNum == 0) {
                airplanes.push(new fighterJet());
            }
            else {
                airplanes.push(new jumboJet());
            }
        }
    }

    drawAirField() {
        fill(255)
        stroke(0, 255,100)
        push()
        rect(this.posX, this.posY, this.width, this.height)
        pop()
    }
}