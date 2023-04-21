
class City {
    constructor(_city, _lat, _lng, _country, _population) {
        this.city = _city;
        this.lat = _lat;
        this.lng = _lng;
        this.country = _country;
        this.population = _population;
        this.textX = 15
        this.textY = 12
    }

    render(_numX, _numY) {
        fill(255)
        textAlign(RIGHT, CENTER)
        push()
        translate(0, 500)
        text(this.city, _numX + this.textX, -_numY - this.textY)
        fill(255)
        ellipse(_numX, -_numY, 10)
        pop()
  
    
    }

}