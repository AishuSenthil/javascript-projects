// Part 1, #1 - Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
	
	constructor(name, mass, scores) {
		this.name = name; // string
		this.mass = mass; // number
		this.scores = scores; // array
	}
	
	// Part 2, #1 - Define a method for adding a score
	addScore(score) {
		this.scores.push(score);
	}
	
	// Part 3.1 #1 - Add a method to average the scores
	average() {
		let sum = 0;
		for (let i=0; i < this.scores.length; i++) {
			sum += this.scores[i];
		}
		return Math.round(10 * sum / this.scores.length) / 10;
	}

	// Part 3.2, #1 - Add a method to get the candidate's status
	status() {
		let avg = this.average();
		if (avg >= 90) {
			return "Accepted";
		} else if (avg >= 80) {
			return "Reserve";
		} else if (avg >= 70) {
			return "Probationary";
		} else {
			return "Rejected";
		}
	}
	
}

// Part 1, #2 - Create three objects of the class
/*
	From the instructions:
	Bubba Bear has a mass of 135 kg and test scores of 88, 85, and 90.
	Merry Maltese has a mass of 1.5 kg and test scores of 93, 88, and 97.
	Glad Gator has a mass of 225 kg and test scores of 75, 78, and 62
*/
let bubba = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merry = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let glad = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

// Print each object to verify its properties were correctly set by the constructor
console.log(bubba);
console.log(merry);
console.log(glad);


// Part 2, #3 - Add a score of 83 for Bubba, the print just his scores array
bubba.addScore(83);
console.log(bubba.scores);


// Part 3.1 - Use the .average() method to verify Merry's has an average 92.7 score
console.log(merry.average());


// Part 3.2, #4 - Test the .status() method on each candidate with the template literal:
// `___ earned an average test score of ___% and has a status of ___.`
let candidates = [bubba, merry, glad];
for (let i = 0; i < candidates.length; i++) {
	console.log(`\n${candidates[i].name} earned an average test score of ${candidates[i].average()}% and has a status of ${candidates[i].status()}.`)
}


// Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let reserveCount = 0;
while (glad.status() !== "Reserve") {
	glad.addScore(100);
	reserveCount++;
}
console.log(glad.scores);
console.log(`\nIt took ${reserveCount} perfect scores to get Glad Gator up to Reserve status!`);

let acceptedCount = 0;
while (glad.status() !== "Accepted") {
	glad.addScore(100);
	acceptedCount++;
}
console.log(glad.scores);
console.log(`\nIt took ${acceptedCount} additional perfect scores to get Glad Gator up to Accepted status!`);
