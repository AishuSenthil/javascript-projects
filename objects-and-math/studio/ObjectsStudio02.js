// Code your orbitCircumference function here:
function orbitCircumference(altitude) {
	const RADIUSOFEARTH = 6371; // km
	let orbitRadius = RADIUSOFEARTH + altitude;
	return Math.round(2 * Math.PI * orbitRadius *100)/100;
}
console.log(orbitCircumference(2000));
// Code your missionDuration function here:
function missionDuration(numOrbits, alt = 2000, speed = 28000) {
	let circumference = orbitCircumference(alt);
	let distance = numOrbits * circumference;
	// round time here so it will be rounded in message
	let time = Math.round(100 * distance / speed) / 100; 
	console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`);
	return time;
}


// Copy/paste your selectRandomEntry function here:


// Code your oxygenExpended function here:


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 