// This function calculates the best route using the Google Maps Directions API
function calculateRoute(origin, destination, mode) {
	// Create a new DirectionsService object
	var directionsService = new google.maps.DirectionsService();

	// Define the request parameters
	var request = {
		origin: origin,
		destination: destination,
		travelMode: mode // e.g. 'DRIVING', 'WALKING', 'TRANSIT', 'BICYCLING'
	};

	// Call the DirectionsService to calculate the route
	directionsService.route(request, function (result, status) {
		if (status == "OK") {
			// Display the route on the map
			var directionsRenderer = new google.maps.DirectionsRenderer();
			directionsRenderer.setMap(map);
			directionsRenderer.setDirections(result);
		}
	});
}
