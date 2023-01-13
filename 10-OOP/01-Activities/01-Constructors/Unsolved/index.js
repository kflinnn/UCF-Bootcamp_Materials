// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'

function Developer(name, tech) {
    this.name = name;
    this.tech = tech;

// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
    this.introduction = () => {
        if (this.name && this.tech) {
            console.log("Hi! My name is " + this.name + " and I like " + this.tech + " products!");
        }
    };
}
// TODO: Create a new object using the 'Developer' constructor
 const developerA = new Developer("Kelley", "apple")
// TODO: Call the 'introduction()' method on the new object
developerA.introduction();
