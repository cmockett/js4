var numVictims = prompt("How many victims do you wish to enter?");
var vicPhoneArray = [];
var vicNameArray = [];
var vicStreetArray = [];

for (var i=0; i<numVictims; i++){
	var vicName = prompt("What's their name?");
	var vicPhone = prompt("What's their phone number?");
	var vicStreet = prompt("What's their street?");
	vicNameArray.push(vicName);
	vicPhoneArray.push(vicPhone);
	vicStreetArray.push(vicStreet);
}

var numVols = prompt("How many volunteers do you wish to enter?");
var volPhoneArray = [];
var volNameArray = [];
var volStreetArray = [];

for (var i=0; i<numVols; i++){
	var volName = prompt("What's their name?");
	var volPhone = prompt("What's their phone number?");
	var volStreet = prompt("What's their street?");
	volNameArray.push(volName);
	volPhoneArray.push(volPhone);
	volStreetArray.push(volStreet);
}
alert(numVictims + " victims in need; " + numVols + " volunteers ready; " + "List of victims: " + vicNameArray + "; List of volunteers: " + volNameArray);