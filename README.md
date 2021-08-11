# plotly-challenge
An interactive dashboard for bellybutton bacteria. Full deployment: https://jshapi16.github.io/plotly-challenge/


This repository uses Javascript, d3.json and Plotly to create an interactive visualization dashboard. Using data from a belly button bacteria study, the dashboard loads with default data and using a dropdown menu, automatically refreshes depending on what study participant the user would like to view.

## The data
The belly button bacteria dataset includes three different javascript objects: names of sample participants, metadata for each participant including their gender, location, etc, and their sample information, which includes bacteria found in each sample as well as the concentrations and bacteria names.

![figure 1](https://github.com/jshapi16/plotly-challenge/blob/main/Images/participant_sample_object.png?raw=true)

Figure 1: Participant sample json



![figure 2](https://github.com/jshapi16/plotly-challenge/blob/main/Images/Participant_metadata_object.png)

Figure 2: Participant metadata json



![figure 3](https://github.com/jshapi16/plotly-challenge/blob/main/Images/Participant_names_object.png)

Figure 3: Participant name json

## Loading the data and initializing the page 
Using d3.json the code loads the json file into a notebook and initializes the dropdown menu with each of the participants id codes. The data shows the first participant's information and using the dropdown menu, the user can select any other participants data and the page will automatically refresh to show that information.

## The Charts
When selecting a new participant id, two graphs a horizontal bar chart and bubble chart automatically refresh displaying the bacteria id, the bacteria name, and showing the concentration of that bacteria in the sample. A table also refreshes displaying the metadata of that person's sample. 

![figure 4](https://github.com/jshapi16/plotly-challenge/blob/main/Images/940_metadata.png?raw=true) ![figure 5](https://github.com/jshapi16/plotly-challenge/blob/main/Images/941_metadata.png?raw=true)

Figure 4: Participant 940 and 941 metadata chart

![figure 6](https://github.com/jshapi16/plotly-challenge/blob/main/Images/940_bubble_chart.png?raw=true)

Figure 6: Participant 940 bubble chart

![figure 7](https://github.com/jshapi16/plotly-challenge/blob/main/Images/941_bubble_chart.png?raw=true)

Figure 7: Participant 941 bubble chart

![Figure 8](https://github.com/jshapi16/plotly-challenge/blob/main/Images/940_bar_graph.png?raw=true) 

Figure 8: Participant 940 bubble chart

![figure 9](https://github.com/jshapi16/plotly-challenge/blob/main/Images/941_bar_graph.png?raw=true) 

Figure 9: Participant 941 bubble chart
