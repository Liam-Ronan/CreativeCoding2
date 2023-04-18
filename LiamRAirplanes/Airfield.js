
class Airfield {
    constructor(_width = 50, _height = 350, _posX = 25, _posY = 25) {
        this.width = _width;
        this.height = _height;
        this.posX = _posX;
        this.posY = _posY
    }

    drawAirField() {
        fill(255)
        stroke(0, 255,100)
        push()
        rect(this.posX, this.posY, this.width, this.height)
        pop()
    }
}