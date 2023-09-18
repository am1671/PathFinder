// This function displays all possible routes to the destination
function displayRoutes(origin, destination) {
	// Create a new DirectionsService object
	var directionsService = new google.maps.DirectionsService();

	// Define the request parameters for each mode of transportation
	var drivingRequest = {
		origin: origin,
		destination: destination,
		travelMode: "DRIVING"
	};
	var walkingRequest = {
		origin: origin,
		destination: destination,
		travelMode: "WALKING"
	};
	var transitRequest = {
		origin: origin,
		destination: destination,
		travelMode: "TRANSIT"
	};

	// Call the DirectionsService for each mode of transportation
	directionsService.route(
		drivingRequest,
		function (drivingResult, drivingStatus) {
			if (drivingStatus == "OK") {
				// Display the driving route on the map
				var drivingRenderer = new google.maps.DirectionsRenderer();
				drivingRenderer.setDirections(drivingResult);
				drivingRenderer.setMap(map);

				// Display the driving route details to the user
				var drivingDistance =
					drivingResult.routes[0].legs[0].distance.text;
				var drivingDuration =
					drivingResult.routes[0].legs[0].duration.text;
				// Display the driving route details to the user, e.g. in a list or table
			}
		}
	);

	directionsService.route(
		walkingRequest,
		function (walkingResult, walkingStatus) {
			if (walkingStatus == "OK") {
				// Display the walking route on the map
				var walkingRenderer = new google.maps.DirectionsRenderer();
				walkingRenderer.setDirections(walkingResult);
				walkingRenderer.setMap(map);

				// Display the walking route details to the user
				var walkingDistance =
					walkingResult.routes[0].legs[0].distance.text;
				var walkingDuration =
					walkingResult.routes[0].legs[0].duration.text;
				// Display the walking route details to the user, e.g. in a list or table
			}
		}
	);

	directionsService.route(
		transitRequest,
		function (transitResult, transitStatus) {
			if (transitStatus == "OK") {
				// Display the transit route on the map
				var transitRenderer = new google.maps.DirectionsRenderer();
				transitRenderer.setDirections(transitResult);
				transitRenderer.setMap(map);

				// Display the transit route details to the user
				var transitDistance =
					transitResult.routes[0].legs[0].distance.text;
			}
		}
	);
}
