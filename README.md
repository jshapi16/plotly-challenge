# plotly-challenge
An interactive dashboard for bellybutton bacteria


This repository uses Javascript, d3.json and Plotly to create an interactive visualization dashboard. Using data from a belly button bacteria study, the dashboard loads with default data and using a dropdown menu, automatically refreshes depending on what study participant the user would like to view.

## The data
The belly button bacteria dataset includes three different javascript objects: names of sample participants, metadata for each participant including their gender, location, etc, and their sample information, which includes bacteria found in each sample as well as the concentrations and bacteria names.


## Loading the data and initializing the page 
Using d3.json the code loads the json file into a notebook and initializes the dropdown menu with each of the participants id codes. The data shows the first participant's information and using the dropdown menu, the user can select any other participants data and the page will automatically refresh to show that information.

## The Charts
When selecting a new participant id, two graphs a horizontal bar chart and bubble chart automatically refresh displaying the bacteria id, the bacteria name, and showing the concentration of that bacteria in the sample. A table also refreshes displaying the metadata of that person's sample. 
