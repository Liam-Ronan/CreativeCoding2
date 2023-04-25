
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

    //Filtering by Year and Label
    let newArray = myArray.filter(row => row.Year == "2018" && row['Statistic Label'] == "Average Red Line Flow");

    //Map
    newArray = newArray.map(row => ({Value: +row.VALUE}));
    console.log(newArray);

    //Reduce to one number
    let newArray2 = newArray.reduce(
        (accum, val) => accum + val.Value, 0
    )/(newArray.length)
    console.log(newArray2)


    let distance = [];
    for(let i = 0; i < newArray.length; i++) {
        for(let x = (i+1); x < newArray.length; x++) {
            if(i == x) {
                break;
            }
            else {
                let j = (+newArray[i].Value) - (+newArray[x].Value)
                distance.push(j)
            }
        }
    }
    console.log(distance);
}