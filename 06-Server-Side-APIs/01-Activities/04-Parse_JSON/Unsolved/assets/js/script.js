// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = "https://api.github.com/repos/twitter/chill/issues?per_page=5";

//^add ? after issues and then per_page to show you want to specify how many results you want, and then =5 for the number. 

fetch(requestUrl)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log("Github Repo Issues \n----------");
		console.log(data);
		// TODO: Loop through the response
		for (i = 0; i < data.length; i++){
	
		// TODO: Console log each issue's URL and each user's login
		console.log(data[i].url); //this lists each URL out line by line
		console.log(data[i].user.login); //this says who the user was for each issue
	}
	});
