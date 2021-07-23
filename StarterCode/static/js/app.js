//-----------------------INITIALIZED FUNCTION--------------//

//--------------------------BAR CHART SETUP------------------------//
//get the values for the bar chart: top 10 sample values and otu ids
function createBarChart(id) {
    console.log(`This is the bar chart for ${id}`)
    d3.json("samples.json").then((data) => {
        var samples = data.samples
        var sampleValues = samples.sample_values
        console.log(samplesValues);
        //for loop to get the top 10 values



        // var topTenSamples = samples.sample_values.slice(0, 10);
        // console.log(topTenSamples);
        // var topTenOtuLabels = []
        // var topTenOtuIds = []

        

        // for (var i=0; i<=10; i++) {
        //     topTenSamples.push(samples.sample_values[i]);
        //     console.log(topTenSamples);
            // topTenOtuLabels.push(samples.otu_labels);
            // console.log(topTenOtuLabels);
            // topTenOtuIds.push(samples.otu_ids)
            // console.log(topTenOtuIds)
        // };
    });

};


//--------------------BUBBLE CHART SETUP----------------//
//function for bubble chart
function createBubbleChart(id) {
    console.log(`This is the bubble chart for ${id}`)
};


//---------------------------DISPLAY DEMOGRAPHIC DATA-------------------//
function displayMetadata(data){
    d3.json("samples.json").then((data) => {
        console.log(data)
        var metadata = data.metadata
    });
};

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

function optionChanged(selectedID) {
    createBarChart(selectedID);
    createBubbleChart(selectedID);
    displayMetadata(selectedID);
};

init();