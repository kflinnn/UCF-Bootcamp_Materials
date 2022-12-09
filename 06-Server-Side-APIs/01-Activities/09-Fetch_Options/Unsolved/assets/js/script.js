fetch("https://api.github.com/repos/nodejs/node/issues?per_page=5", {
	method: "POST",
	mode: "cors",
	credentials: "same-origin",
	
})
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data);
	});
