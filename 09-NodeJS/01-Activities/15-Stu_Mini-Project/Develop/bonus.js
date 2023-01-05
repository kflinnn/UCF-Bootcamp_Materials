const inquirer = require("inquirer");

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require("fs").promises;

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
	return inquirer.prompt([
		//TODO: Create prompts for user input based on the information needed
	]);
};

const generateHTML = ({ name, location, github, linkedin }) =>
	//TODO: Write code between the backticks to output the data from the inquirer prompts
	``;

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
