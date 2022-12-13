var resultTextEl = document.querySelector("#result-text");
var resultContentEl = document.querySelector("#result-content");
var searchFormEl = document.querySelector("#search-form");


var locQueryUrl = "https://www.loc.gov/?fo=json";



function getParams() {
	// TODO: Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])

	// TODO: Get the query and format values

	// TODO: pass the query and format values to the searchApi function
	searchApi(query, format);
}

function printResults(resultObj) {
	console.log(resultObj);

	// TODO: set up `<div>` to hold full results cards
	// TODO: add classes from jass.css file for styling

	// TODO: set up `<div>` to hold card body
	// TODO: add classes from jass.css file for styling
	// TODO: append card body to full result card

	// TODO: set up `<h3>` to hold object title text content

	// TODO: set up `<p>` to hold object inner HTML date

	// if conditional statement to show subjects
	if (resultObj.subject) {
		// TODO: Complete conditional statement
	} else {
		bodyContentEl.innerHTML +=
			"<strong>Subjects:</strong> No subject for this entry.";
	}

	// if conditional statement to show descriptions
	if (resultObj.description) {
		// TODO: Complete conditional statement
	} else {
		bodyContentEl.innerHTML +=
			"<strong>Description:</strong>  No description for this entry.";
	}

	// TODO: create a link button to 'Read More'

	// TODO: append the elements to the card body `<div>`

	// TODO: append the card body to the full results `<div>`
}

function searchApi(query, format) {
	var locQueryUrl = "https://www.loc.gov/search/?fo=json";

	if (format) {
		locQueryUrl = "https://www.loc.gov/" + format + "/?fo=json";
	}

	locQueryUrl = locQueryUrl + "&q=" + query;

	// TODO: fetch response in JSON format
	// TODO: then return response
	// TODO: and make sure to catch errors
}

function handleSearchFormSubmit(event) {
	event.preventDefault();

	// TODO: get value from search input

	// TODO: get value from format selection

	// TODO: pass values as arguments to searchApi
	searchApi();
}

// search form event listener for submit **START HERE**
searchFormEl.addEventListener("submit", handleSearchFormSubmit);

getParams();
