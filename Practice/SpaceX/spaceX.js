// const url = "https://api.spacexdata.com/v2/launchpads";
// d3.json(url).then(receivedData => console.log(receivedData));

//to get the first element of the dataset
// d3.json(url).then(spaceXResults =>
//     console.log(spaceXResults[0]));

//to get just the name
//d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

//to get the latitude of vandenburg airforce base
//d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

//skill drill 12.3.1 ---- DID NOT WORK!!!!
// var launchSite = [d3.json(url).then(spaceXResults => console.log(spaceXResults))]
// var lat_lng = launchSite.map(lat => launchSite.location.latitude)
// console.log(lat_lng)

d3.json("samples.json").then(function(data){
    console.log(data)
});

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    filteredwfreq = wfreq.filter(element => element != null);
    console.log("filtered",filteredwfreq);
});

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach((key,value) => {
        console.log(key+ ': ' + value);});
});