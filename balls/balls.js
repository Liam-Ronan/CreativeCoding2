class Balls {
    constructor() {
        this.x = Math.floor(Math.random()*width);
        this.y = Math.floor(Math.random()*height);
    }

    render() {
        fill(255);

        ellipseMode(CENTER);
        ellipse(this.x, this.y, 10, 10);
    }
}