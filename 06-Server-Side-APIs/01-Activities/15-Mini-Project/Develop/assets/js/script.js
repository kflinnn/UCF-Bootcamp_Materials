var searchFormEl = document.querySelector("#search-form");

function handleSearchFormSubmit(event) {
	event.preventDefault();

	// TODO: get value from search input
	var searchInput = document.getElementById("search-input").value; 
	console.log(searchInput);
	// TODO: get value from format selection

	// TODO: conditional statement to catch user error

	// TODO: create query string and assign location appropriately
}

// search form event listener for submit **START HERE**
searchFormEl.addEventListener("submit", handleSearchFormSubmit);
