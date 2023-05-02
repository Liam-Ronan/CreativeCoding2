
class Helicopter extends Plane {
    constructor() {
        super();
        this.size = 0.6;
        this.colour = 0
    }

    render() {
        super.render();
        fill(this.colour)
    }

    hover() {
        this.velocity = 0;
    }

    checkLimits() {
        super.checkLimits();
    }
}