// Select the button
d3.json("samples.json").then(function (data) {
    console.log(data)
});

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

