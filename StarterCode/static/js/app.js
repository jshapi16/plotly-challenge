//Things left to do: figure out how to get data to switch when i do the event change. 
//Figure out where to add update plotly/restyle plotly. 
//figure out how to update the demographic information. 
//figure out how to make the otu id and concentration appear on the hover for the bubble and bar chart
//figure out the rest of the gauge chart...
//


//-----------------------INITIALIZED FUNCTION--------------//
//initializes the page with a default value
function init() {
    var dropDownMenu = d3.select("#selDataset");
    d3.json("samples.json").then((data) => {
        var sampleNames = data.names;
        sampleNames.forEach((sample)=> {
            dropDownMenu
                .append("option")
                .text(sample)
                .property("value", sample);

        });
        var selectedID = sampleNames[0]
        createBarChart(selectedID);
        createBubbleChart(selectedID);
        displayMetadata(selectedID);
    }); 
};

//on change get new data
d3.selectAll("#selDataset").on("change", optionChanged);

//function for optionChanged that changes the id
function optionChanged(newSample) {
    createBarChart(newSample);
    createBubbleChart(newSample);
    displayMetadata(newSample);
    updatePlotly(newSample);
};

//--------------------------BAR CHART SETUP------------------------//
//get the values for the bar chart: top 10 sample values and otu ids
function createBarChart(id) {
    console.log(`This is the bar chart for ${id}`)
    d3.json("samples.json").then((data) => {
        //create variables to store the otu, sample, and id information
        var samples = data.samples
        var sampleValues = samples[0].sample_values
        var otuId = samples[0].otu_ids
        var otuLabel = samples[0].otu_labels
        var sampleId = samples[0].id

        //for loop to get the top 10 values
        var topTenSamples = sampleValues.slice(0,10).reverse();
        var topTenOtuId = otuId.slice(0,10).map(topTenOtuId => `OTU ${topTenOtuId}`).reverse();
        var topTenOtuLabel = otuLabel.slice(0,10).reverse();
        console.log(topTenOtuId)
        console.log(topTenSamples)
        console.log(topTenOtuLabel)

        //Make bar chart using plotly
        var trace1 = {
            y: topTenOtuId,
            x: topTenSamples,
            text: topTenOtuLabel,
            type: "bar",
            orientation: 'h'
        }
        data = [trace1]
        var layout = {
            title: `Top ten belly button bacteria samples for: ${sampleId}`,
        }

        Plotly.newPlot("bar", data, layout);
    });
};

//--------------------BUBBLE CHART SETUP----------------//
//function for bubble chart
function createBubbleChart(id) {
    console.log(`This is the bubble chart for ${id}`)
    d3.json("samples.json").then((data) => {
        //create variables to store the otu, sample, and id information
        var samples = data.samples
        var sampleValues = samples[0].sample_values
        var otuId = samples[0].otu_ids
        var otuLabel = samples[0].otu_labels
        var sampleId = samples[0].id

        var trace1 = {
            x: otuId,
            y: sampleValues,
            text: otuLabel,
            mode: 'markers',
            marker: {
                color: otuId,
                size: sampleValues
            }
        };

        layout = {title: `Bubble Chart of otu samples for ${sampleId}`};

        data = [trace1];

        Plotly.newPlot("bubble", data, layout);
    });
};

// Update the restyled plot's values
function updatePlotly(newdata) {
    Plotly.restyle("bubble", "values", [newdata]);
  }

//------------------GAUGE CHART---------------------//
// function createGuageChart(id) {
//     console.log(`This is the gauge chart for ${id}`)
//     d3.json("samples.json").then((data) => {
//         var metadata = data.metadata
//         var samples = data.samples
//         var wfreq = metadata[6].wfreq
//         var sampleId = samples[0].id
//         console.log(wfreq)

//     var data = [{
//        domain: {x: [0, 1], y:[0, 1]},
//         value: wfreq,
//         title: {text: `Belly button washing frequency for ${sampleId}`},
//         type: "indicator",
//         mode: "gauge+number",
//         gauge: {axis: {range: [null, 9]}}
//     }];

//     layout = {width: 600, height: 500};

//     Plotly.newPlot("gauge", data, layout);
//     });
// };


//---------------------------DISPLAY DEMOGRAPHIC DATA-------------------//
function displayMetadata(data){
    d3.json("samples.json").then((data) => {
        console.log(data)
        var metadata = data.metadata
        var labels = Object.keys(metadata[0])
        console.log(labels)
        var values = Object.values(metadata[0])
        console.log(values)
    });
};

init();