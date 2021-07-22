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
        var otuId = data.samples.otu_ids;
        var otuLabel = data.samples.out_labels;
        //probably i need to map the otu labels to the otu ids
        //can i call these variables outside of the loop?
    }
});

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

// const dataPromise = d3.json(data);
// console.log("Data Promise: ", dataPromise);

//div class=well for 