function Rider(name, heightReq) {
	this.name = name;
	this.heightReq = heightReq;
}
// Checks if a rider is tall enough
Rider.prototype.checkHeight = function(height) {
	return (height >= this.heightReq) ? "You can ride!" : "You are too short to ride.";
}
function checkHeight() {
	var height = document.getElementById("heightInput").value;
	
	var rider = new Rider("Big Thunder Mountain Railroad", 52);
	
	document.getElementById("rideResult").innerHTML = rider.checkHeight(height);
	function logRider() {
		console.log(rider);
	}
	logRider();
}