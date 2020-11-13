// // Establish empty arrays
// var otu_ids = []
// var sampleValues = []
// var subject_ids = []

// initialize the page with a default plot 
var oneHundreds = [];
var twoHundreds = [];
var threeHundreds = [];
var fourHundreds = [];
var fiveHundreds = [];
var sixHundreds = [];
var eightHundreds = [];

function init() {

    var groups = ["100's", "200's", "300's", "400's", "500's", "600's", "800's"]

    // Retrieve data from samples.json file using D3
    d3.json("samples.json").then((data) => {
        // console.log(data);

        // Separate data out into useable pieces for rendering into charts
        // Array of Test Subject IDs
        var testSubjects = data.names;
        console.log(testSubjects);

        // Array of objects -- each object containing one test subject's demographic info
        var demographicInfo = data.metadata
        // console.log(demographicInfo);

        // Array of objects -- each object containing one test subject's samples
        var samplesInfo = data.samples;
        console.log(samplesInfo);

        // Pull out sample_values (arrays of each sample value for each user)
        var sampleValues = samplesInfo.map(sample => sample.sample_values);
        console.log(sampleValues);

        //Pull out otu_ids (arrays of otu ids for each user)
        var otuIDs = samplesInfo.map(sample => sample.otu_ids);
        console.log(otuIDs);






        // ////////Dummy Data for Setting Up Charts////////////
        var otu_ids = [1, 2, 3, 4, 5];
        var sample_values = [1, 2, 4, 8, 16];
        var otu_labels = ["one", "two", "three", "four", "five"]

        ////////BAR CHART///////////
        // Create trace for bar chart
        var trace1 = {
            x: otuIDs,
            y: sampleValues,
            type: "bar"
            // orientation: "h" //saying it's deprecated???
        };

        // Create the data array for bar chart
        var data1 = [trace1];

        // Create the layout for the bar chart
        var layout1 = {
            title: "Bar"
        };

        // Plot the bar chart to a div tag with id "bar"
        Plotly.newPlot("bar", data1, layout1);


        ////////BUBBLE CHART///////////
        // Create trace for bubble chart
        var trace2 = {
            x: otuIDs,
            y: sampleValues,
            text: otu_labels,
            mode: "markers",
            marker: {
                color: otuIDs,
                size: sampleValues
            }
        };

        // Create the data array for the bubble chart
        var data2 = [trace2];

        // Create the layout for the bubble chart
        var layout2 = {
            title: "Bubble"
        };

        // Plot the chart to a div tag with id "bubble"
        Plotly.newPlot("bubble", data2, layout2);
    });




    // Call updatePlotly() when a change takes place to the DOM
    d3.selectAll("#selDataset").on("change", updatePlotly);

    // This function is called when a dropdown menu item is selected
    function updatePlotly() {

        ////// Building drop-down ///////
        // Use D3 to select the dropdown menu
        var dropDown = d3.select("#selDataset");

        // Assign the value of the dropdown menu option to a variable
        var dataset = testSubjects.forEach((subjID) => {
            dropDown
                .append("testSubjects")
                .text(subjID)
                .property("value");
        });




        // restyle the graph based on the dropdown selection 
        Plotly.restyle("bar", "x", [x]);
        Plotly.restyle("bar", "y", [y]);
        Plotly.restyle("bubble", "x", [x]);
        Plotly.restyle("bubble", "y", [y]);


    }
    init();
};