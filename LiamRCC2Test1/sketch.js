let table;
let cities =[];
let filteredCities;
let journeys = [];
let maxLat, minLat, maxLng, minLng;

function preload() {   
    table = loadTable("cities.csv", "csv", "header");
    console.log(table);
}

function setup(){
    createCanvas(500,500);
    angleMode(DEGREES)

    for(let i = 0; i < table.getRowCount(); i++) {
       cities.push(new City(table.rows[i].obj.city, +table.rows[i].obj.lat, +table.rows[i].obj.lng, table.rows[i].obj.country, +table.rows[i].obj.population));
    }
    console.log(cities);

    //filtering cities with population greater than 140000
    filteredCities = cities.filter(row => row.population > 14000);
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
        for(let i = x+1; i < filteredCities.length; i++) {
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
    background(0)
}
