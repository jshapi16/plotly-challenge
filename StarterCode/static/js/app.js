//-----------INITIALIZED FUNCTION WITH DEFAULT DATA--------------//
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
    })
}

//function for optionChanged (from html) that changes the id
function optionChanged(newSample) {
    createBarChart(newSample)
    createBubbleChart(newSample)
    displayMetadata(newSample)
}

//--------------------------BAR CHART SETUP------------------------//
//get the values for the bar chart: top 10 sample values and otu ids
function createBarChart(id) {
    console.log(`This is the bar chart for ${id}`)
    d3.json("samples.json").then((data) => {
        //create variables to store the otu, sample, and id information
        var samples = data.samples
        var idArray = samples.filter(key => key.id == id)
        var sampleValues = idArray[0].sample_values
        console.log(sampleValues)
        var otuId = idArray[0].otu_ids
        var otuLabel = idArray[0].otu_labels
        var sampleId = idArray[0].id

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
            title: {text: `Top ten belly button bacteria samples for: ${sampleId}`},
            xaxis: {title: "OTU Sample Concentration"},
            yaxis: {title: "OTU Sample ID"}
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
        var idArray = samples.filter(key => key.id == id)
        var sampleValues = idArray[0].sample_values
        var otuId = idArray[0].otu_ids
        var otuLabel = idArray[0].otu_labels
        var sampleId = idArray[0].id

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

        layout = {title: `Bubble Chart of otu samples for ${sampleId}`,
        };

        data = [trace1];

        Plotly.newPlot("bubble", data, layout);
    });
};

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
function displayMetadata(id){
    d3.json("samples.json").then((data) => {
        console.log(data)
        var metadata = data.metadata
        var idArray = metadata.filter(key => key.id == id)
        console.log(idArray)
        var metadataTable = d3.select("#sample-metadata")
        metadataTable.html("");
        //loop through labels and values and append them
        Object.entries(idArray[0]).forEach(([key, value]) => {
            metadataTable.append("h6").text(`${key}: ${value}`)
        }) 

        var labels = Object.keys(idArray[0])
        console.log(labels)
        var values = Object.values(idArray[0])
        console.log(values)
    });
};

init();