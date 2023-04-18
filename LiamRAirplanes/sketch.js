let airplanes = [];
let airfield;
let apWidth = 100;
let apHeight = 100;
let apTailLength = 50;

function setup() {
    createCanvas(500,500);
    angleMode(DEGREES);

    airfield = new Airfield();
    for(let i = 0; i < 5; i++) {
        airplanes.push(new Airplane());
    }
    console.log(airplanes);
}

function draw() {
    background(0);
    airplanes.forEach(airplane => {
        airplane.render();
        airplane.move();
    });
    airfield.drawAirField();
}
