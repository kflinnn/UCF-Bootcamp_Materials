var badRequestUrl = "https://api.github.com/orgs/nodejs/repos?per_page=5";

var responseText = document.getElementById("response-text");


function getApi(request) {
	fetch(badRequestUrl)
		.then(function (response) {
			// Check the console first to see the response.status
			console.log(response.status);
			// Then write the conditional based on that response.status value
		
			// Make sure to display the response on the pagr
			responseText.textContent = response.status;
		})
		.then(function (data) {
			console.log(data);
		});
}

getApi(badRequestUrl);
