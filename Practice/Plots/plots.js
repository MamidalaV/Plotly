Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

//Skill Drill 12.1.3
var partyOrder = [{x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
                y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
                type: "bar"}];

var data = partyOrder
var layout = {title: "'Bar' Chart",
            xaxis: {title: "Drinks"},
            yaxis: {title: "% of drinks ordered"}
            };

Plotly.newPlot("drinks", data, layout);

//changing the above chart to "pie"
var partyOrder = {labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
                values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
                type: 'pie'};

var data = [partyOrder]
var layout = {title: "'Pie' Chart",
            //xaxis: {title: "Drinks"},
            //yaxis: {title: "% of drinks ordered"}
            };

Plotly.newPlot("drinks_pie", data, layout);

//Skill Drill 12.1.4
var stockTrend = {x: [2,3,4,5,8,9,10,11,12,16,17,18,19,22,23,24,25,26,29,30,31],
            y: [21.14,20.94,21.45,21.55,21.71,21.43,21.21,21.17,21.07,20.84,20.97,21.02,21.25,21.31,21.39,21,20.98,20.86,20.98,21,21.08],
            mode: 'markers',
            type: "scatter"}

var layout = {title: "Scatter Plot",
            xaxis: {title: "Jan 2018"},
            yaxis: {title: "Closing Price"}};

Plotly.newPlot("stockPrice",[stockTrend],layout)


//Skill Drill 12.2.1 (1)
var numbers = [0,2,4,6,8]
var modified = numbers.map(num => num + 5)
console.log(modified)

//Skill Drill 12.2.1 (2)
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.population;
});
console.log(cityNames);

//Skill Drill 12.2.1 (3)
//DID NOT WORK!!!
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var startsWithS = words.match(word => word = 'S\W')
console.log(startsWithS)

var familyAge = [3,2,39,37,9]
var sortedFamily = familyAge.sort((a,b) => a-b);
console.log(sortedFamily)

//Skill Drill 12.2.1 (4)
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var slice1 = words.slice(0,3)
console.log(slice1)