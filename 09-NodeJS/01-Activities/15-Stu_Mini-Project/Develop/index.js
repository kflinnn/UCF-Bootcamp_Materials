const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = ({ name, location, github, linkedin }) =>
	//TODO: Write code between the backticks to output the data from the inquirer prompts
	``;

inquirer
	.prompt([
		//TODO: Create prompts for user input based on the information needed
	])
	.then((answers) => {
		const htmlPageContent = generateHTML(answers);

		fs.writeFile("index.html", htmlPageContent, (err) =>
			err ? console.log(err) : console.log("Successfully created index.html!")
		);
	});
