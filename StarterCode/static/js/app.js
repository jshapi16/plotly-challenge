//--------------------------BAR CHART SETUP------------------------//
//get the values for the bar chart: top 10 sample values and otu ids

function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }

d3.json("samples.json").then((data) => {
    //  For loop to get only the top 10 bacteria
    for (var i = 0; i < 10; i++) {
        var topTenSamples = data.samples.sample_values;
        var topTenOtuId = data.samples.otu_ids;
        var topTenOtuLabel = data.samples.otu_labels;
        //probably i need to map the otu labels to the otu ids
        //can i call these variables outside of the loop?
    }
});


//-------------------------------DROP DOWN AND TABLE SETUP------------------------//

//get the key and value pairs
for (const [key, value] of Object.entries(data.metadata)) {
    console.log(`${key}: ${value}`);
  }

//build the table for the metadata
//variables for the dropdown

var age = data.metadata.age
var bbtype = data.metadata.bbtype
var ethnicity = data.metadata.ethnicity
var gender = data.metadata.gender
var location = data.metadata.location
var wfreq = data.metadata.wfreq
var sampleNum = data.metadata.id

//initializes the page with a default value
function init() {
    var trace = {

    }
         

}

//--------------------BUBBLE CHART SETUP----------------//

//variables for bubble chart
var otuIds = data.samples.otu_ids
var sampleValues = data.samples.sample_values
var otuLabels = data.samples.otu_labels

//bubble Chart setup
var trace1 = {
    x: otuIds,
    y: sampleValues,
    text: [otuLabels],
    mode: "markers",
    marker: {
        color: [otuIds],
        size: [sampleValues]
    }
};

var data = [trace1];

var layout = {
    title: "Belly Button Bacteria",
    showlegend = true
};

Plotly.newPlot("bubble", data, layout);



// const dataPromise = d3.json(data);
// console.log("Data Promise: ", dataPromise);

//div class=well for 