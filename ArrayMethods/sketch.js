
let table = [
    {
        "id": 1,
        "name": "liam",
        "age": 22,
        "course": "creative computing"
    },
    {
        "id": 2,
        "name": "connor",
        "age": 27,
        "course": "creative computing"
    },
    {
        "id": 3,
        "name": "connor",
        "age": 178,
        "course": "creative computing"
    }
]

function preload() {
    // table = loadTable("data/people.json", "JSON");
}

function setup () {

    //Maps - create a new array of specified attributes
    let newArray2 = table.map(table => table.name)
    console.log(newArray2);
    let newArray = table.map(table => table.age)
    console.log(int(newArray));

    //Filter - creates an array to get everything that meets a specific criteria
    let newFilter = table.filter(table => table.name == "liam" && table.age == 22);
    console.log(newFilter);

    //Reduce - transforming an array into a single value
    let newReduce = newArray.reduce((accum, val) => accum + val, 0);
    console.log(newReduce);
}


function draw() {

}