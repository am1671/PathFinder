// This function searches for nearby places using the Google Places API
function searchNearby(location, radius, types) {
	// Create a new PlacesService object
	var placesService = new google.maps.places.PlacesService(map);

	// Define the search parameters
	var request = {
		location: location,
		radius: radius,
		types: types // e.g. 'restaurant', 'pharmacy', 'hospital', 'gas_station'
	};

	// Call the PlacesService to search for nearby places
	placesService.nearbySearch(request, function (results, status) {
		if (status == "OK") {
			// Display the nearby places to the user, e.g. in a list or table
		}
	});
}
