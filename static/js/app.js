// Establish empty arrays
var otuIDS = []
var sampleValues = []
var subjectIDS = []
var otuLabels = []

// Initialize with default plot
function init() {


    ////////MAYBE USEFUL/////////////
    // Retrieve data from samples.json file using D3
    d3.json("samples.json").then(function (data) {
        console.log(data);

        // Separate data out into arrays
        // Array of Test Subject IDs
        var testSubjectNames = data.names;
        console.log(testSubjectNames);

        // Array of objects -- each object containing one test subject's demographic info
        var demographicInfo = data.metadata
        console.log(demographicInfo);

        // Array of objects -- each object containing one test subject's samples
        var samplesInfo = data.samples;
        console.log(samplesInfo);






        //     var new_subject_id = data.map(function (name) {
        //         return data.names;
        //         subject_ids.push(new_subject_id);
        //     })

        //     var otu_ids = data.samples.otu_ids;
        //     var sample_values = data.samples.sample_values;
        //     console.log(subject_id);
        //     console.log(otu_ids);
        //     console.log(sample_values);



        // // try #1
        // var sampleData = JSON.parse(data)
        // console.log(sampleData)

        // // try #2
        // // Use `Object.values` and `forEach` to iterate through keys
        // Object.keys(data).forEach(key => console.log(key));

        // // Use `Object.values` and `forEach` to iterate through values
        // Object.values(data).forEach(value => console.log(value));

        // // Use `Object.entries` and `forEach` to iterate through keys and values
        // Object.entries(data).forEach(([key, value]) => console.log(`Key: ${key} and Value ${value}`));


        // // // Assign the data from `samples.json` to a descriptive variable
        // // var bbSampleData = data;

        // // // Select the button


        // Create predicate function to display top 10 OTUs for each individual
        // function filterTopOTUs(person) {
        //     return person.
        // }



        // // Initializes the page with a default plot
        // function init() {
        //     data = [{
        //       x: [1, 2, 3, 4, 5],
        //       y: [1, 2, 4, 8, 16] }];

        //     var CHART = d3.selectAll("#plot").node();

        //     Plotly.newPlot(CHART, data);
        //   }

        //   // Call updatePlotly() when a change takes place to the DOM
        //   d3.selectAll("body").on("change", updatePlotly);

        //   // This function is called when a dropdown menu item is selected
        //   function updatePlotly() {
        //     // Use D3 to select the dropdown menu
        //     var dropdownMenu = d3.select("#selDataset");
        //     // Assign the value of the dropdown menu option to a variable
        //     var dataset = dropdownMenu.node().value;

        //     var CHART = d3.selectAll("#plot").node();

        //     // Initialize x and y arrays
        //     var x = [];
        //     var y = [];

        //     switch(dataset) {
        //       case "dataset1":
        //         x = [1, 2, 3, 4, 5];
        //         y = [1, 2, 4, 8, 16];
        //         break;

        //       case "dataset2":
        //         x = [10, 20, 30, 40, 50];
        //         y = [1, 10, 100, 1000, 10000];
        //         break;

        //       case "dataset3":
        //         x = [100, 200, 300, 400, 500];
        //         y = [10, 100, 50, 10, 0];
        //         break;

        //       default:
        //         x = [1, 2, 3, 4, 5];
        //         y = [1, 2, 3, 4, 5];
        //         break;
        //     }


        //     // Note the extra brackets around 'x' and 'y'
        //     Plotly.restyle(CHART, "x", [x]);
        //     Plotly.restyle(CHART, "y", [y]);
        //   }

        //   init();

        // var 

        ////////Dummy Data for Testing////////////
        var otuIDS = [1, 2, 3, 4, 5];
        var sampleValues = [1, 2, 4, 8, 16];
        var otuLabels = ["one", "two", "three", "four", "five"]

        ////////BAR CHART///////////
        // Create trace for bar chart
        var trace1 = {
            x: otuIDS,
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
            x: otuIDS,
            y: sampleValues,
            text: otuLabels,
            mode: "markers",
            marker: {
                color: otuIDS,
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
}

// Change bar chart based on dropdown
d3.selectAll("#selDataset").on("change", updatePlotly);

// function to update the graph via the dropwdown 
function updatePlotly() {
    // use d3 to select the dropdown menu 
    var dropdownMenu = d3.select("#selDataset");
    // assign the value of the dropdown menu to variable 
    var dataset = dropdownMenu.property("value");

    // initialize the arrays to be used 
    var x = []
    var y = []
    var dataArray;