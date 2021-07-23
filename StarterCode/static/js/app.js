//-----------------------INITIALIZED FUNCTION--------------//

//--------------------------BAR CHART SETUP------------------------//
//get the values for the bar chart: top 10 sample values and otu ids
function createBarChart(id) {
    console.log(`This is the bar chart for ${id}`)
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

d3.selectAll("#selDataset").on("change", init);
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

init();