var to = document.getElementById("to");
var from = document.getElementById("from");
var midway = document.getElementById("place-search-midway");

function initMap() {
	let options = {
		// componentRestrictions: { country: ["au"] },
		fields: ["geometry", "name"]
	};
	let autocompleteTo = new google.maps.places.Autocomplete(to, options);
	let autocompleteFrom = new google.maps.places.Autocomplete(from, options);
	let autocompleteMidway = new google.maps.places.Autocomplete(
		midway,
		options
	);
}

window.initMap = initMap;

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function showLocation(location) {
		let { latitude, longitude } = location.coords;
		let userLocation = [latitude, longitude];
		to.value = userLocation;
		console.log(userLocation);
	});
}
