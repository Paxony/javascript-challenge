//  write code that appends a table to your web page
let table = d3.select("table");
table.attr("class", "table table-striped");

let tbody = d3.select("tbody");

let tableData = data;
// then adds new rows of data for each UFO sighting.

function ShowData(data) {
    tbody.text("")
    data.forEach(UFO => {
        console.log(data);
        let row = tbody.append("tr");
        Object.entries(UFO).forEach(([key, value]) => {
            new_td = row.append("td").text(value)
        })
    });

};


//Use a date form in your HTML document and write JavaScript code
// that will listen for events and search through the date/time column to find rows that match user input.
let dateSelection = d3.select("#datetime");
let button = d3.select("#filter-btn");

function showUfos() {
    d3.event.preventDefault();
    console.log(dateSelection.property("value"));
    var newTable = tableData.filter(data => data.datetime === dateSelection.property("value"))
    ShowData(newTable)
};


dateSelection.on("change", showUfos)
button.on("click", showUfos)