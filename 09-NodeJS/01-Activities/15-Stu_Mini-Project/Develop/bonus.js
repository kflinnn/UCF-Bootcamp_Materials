const inquirer = require("inquirer");

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require("fs").promises;

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
	return inquirer.prompt([
		//TODO: Create prompts for user input based on the information needed
		{
			type: "input",
			name: "name",
			message: "What is your name?",
		},
		{
			type: "input",
			name: "location",
			message: "What is your location?",
		}, 
		{
			type: "input",
			name: "linkedin",
			message: "What is your LinkedIn username?",
		},
		{
			type: "input",
			name: "github",
			message: "What is your Github username?",
		},		
	  ])
	};

const generateHTML = ({ name, location, github, linkedin }) =>
	//TODO: Write code between the backticks to output the data from the inquirer prompts
	`<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	<body>
		<h1>Hi! My name is ${name}!</h1>
		<h2>I live in ${location}.</h2>
		<h3>My GitHub username is ${github}</h3>
		<h3>My LinkedIn username is ${linkedin}</h3>
	</body>
	</html>`;

// Bonus using writeFileSync as a promise
const init = () => {
	promptUser()
		//TODO: Use writeFile method imported from fs.promises to use promises instead of
		// a callback function
		.then((answers) => )
    //TODO: log success message to the console
		.then(() => )
    //TODO: catch any errors
		.catch();
};

init();
