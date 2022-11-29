// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var projectDateInputEl = $('#project-date-input');

// handle displaying the time
function displayTime() {

}

// Reads projects from local storage and returns array of project objects.
// Returns an empty array ([]) if there aren't any projects.
function readProjectsFromStorage() {

}

// Takes an array of projects and saves them in localStorage.
function saveProjectsToStorage(projects) {

}

// Gets project data from local storage and displays it
function printProjectData() {

}

// Removes a project from local storage and prints the project data
function handleDeleteProject() {

}

// Adds a project to local storage and prints the project data
function handleProjectFormSubmit(event) {
  
}

projectFormEl.on('submit', handleProjectFormSubmit);

// Use jQuery event delegation to listen for clicks on dynamically added delete
// buttons.
projectDisplayEl.on('click', '.btn-delete-project', handleDeleteProject);

displayTime();
setInterval(displayTime, 1000);

printProjectData();
