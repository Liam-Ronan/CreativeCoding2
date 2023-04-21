let table;
let cities =[];
let filteredCities;
let journeys = [];
let maxLat, minLat, maxLng, minLng;
let maxPopulation = 10000;

function preload() {   
    table = loadTable("cities.csv", "csv", "header");
    console.log(table);
}

function setup(){
    createCanvas(500,500);
    background(50,50,50)
    angleMode(DEGREES);

    for(let i = 0; i < table.getRowCount(); i++) {
       cities.push(new City(table.rows[i].obj.city, +table.rows[i].obj.lat, +table.rows[i].obj.lng, table.rows[i].obj.country, +table.rows[i].obj.population));
    }
    console.log(cities);

    //filtering cities with population greater than 140000
    filteredCities = cities.filter(row => row.population > maxPopulation);
    console.log(filteredCities);

    //Average population using a reduce method
    let avgPopulation = filteredCities.reduce((accum, val) => accum + val.population, 0) / filteredCities.length
    console.log(avgPopulation);


    //Maps for min and max lng, lat values
    let latValues = filteredCities.map(row => row.lat)
    maxLat = max(latValues);
    minLat = min(latValues);
    console.log(minLat);
    console.log(maxLat);

    let lngValues = filteredCities.map(row => row.lng)
    maxLng = max(lngValues);
    minLng = min(lngValues);
    console.log(minLng);
    console.log(maxLng);

    //Journeys
    for(let x = 0; x < filteredCities.length; x++) {
        for(let i = (x+1); i < filteredCities.length; i++) {
                let fromCity = filteredCities[x];
                let toCity = filteredCities[i];

                let diffX = fromCity.lng - toCity.lng;
                let diffY = fromCity.lat - toCity.lng;

                let distance = Math.sqrt((diffX * diffY) + (diffX*diffY))*100;

                journeys.push(new Journey(
                    fromCity.city,
                    fromCity.lat,
                    fromCity.lng,
                    toCity.city,
                    toCity.lat,
                    toCity.lng,
                    distance
                ));

            }
        }

        console.log(journeys)
        
    }


function draw(){

    filteredCities.forEach(city => {
        let posX = map(city.lng, minLng, maxLng, 50, 400)
        let posY = map(city.lat, minLat, maxLat, 50, 400)
        city.render(posX, posY)
    });

    journeys.forEach(journey => {
        let fromX = map(journey.fromLat, minLat, maxLat, 50, 400)
        let fromY = map(journey.fromLng, minLng, maxLng, 50, 400)
        let toX = map(journey.toLat, minLat, maxLat, 50, 400)
        let toY = map(journey.toLng, minLng, maxLng, 50, 400)

        stroke(100)
        line(fromX, -fromY+500, toY, -toX+500)
    });


}


