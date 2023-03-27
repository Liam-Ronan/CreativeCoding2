
let data;
let myArray = [];


function preload() {
    data = loadTable("data/LUAS_Flow.csv", "csv", "header");
    // console.log(data)
}

function setup () {
    for(let i = 0; i < data.getRowCount(); i++) {
        myArray.push(data.rows[i].obj)
    }
    let newArray = myArray.filter(row => row.Year == "2018" && row['Statistic Label'] == "Average Red Line Flow");

    newArray = newArray.map(row => ({Value: +row.VALUE}));

    console.log(newArray);

    let newArray2 = newArray.reduce(
        (accum, val) => accum + val.Value, 0
    )/(newArray.length)

    console.log(newArray2)


    let distance = [];
    for(let x = 0; x < newArray.length; x++) {
        if(x >= 1) {
           var varOne = newArray[x].Value - newArray[x-1].Value
        }
        console.log(varOne)
    }
}