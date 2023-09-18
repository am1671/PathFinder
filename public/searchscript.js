var data2 = "<%=data%>";
console.log(data2);
var data = "<%=data%>".replaceAll("&#34;", '"');
var searchDetails = JSON.parse(data);
console.log(searchDetails);
console.log(searchDetails.source);
console.log(searchDetails.dest);
console.log(searchDetails.mode);

let map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 19.09513, lng: 72.883 },
		zoom: 12
	});
}

window.initMap = initMap;

const getCurrentLocation = new Promise(function (resolve, reject) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function showLocation(
			location
		) {
			let { latitude, longitude } = location.coords;
			let userLocation = [latitude, longitude];

			let marker = new google.maps.Marker({
				position: { lat: latitude, lng: longitude },
				map: map,
				animation: google.maps.Animation.DROP,
				draggable: true
			});

			resolve(userLocation);
		});
	} else {
		reject(alert("Could not find your location"));
	}
});

//send request for directions

getCurrentLocation.then((res) => {
	const lat = res[0];
	const lon = res[1];

	let currentLocation = `${lat}, ${lon}`;

	if (from.value === "current location") {
		from.value = currentLocation;
	}
	let directionsRequest = {
		origin: String(from.value),
		destination: String(to.value),
		travelMode: String(chosenTravel)
	};

	let directionsService = new google.maps.DirectionsService();
	let directionsDisplay = new google.maps.DirectionsRenderer();

	directionsDisplay.setMap(map);

	if (to === "" || from === "" || chosenTravel === "") {
		alert("Please add your to and from with a mode of travel");
	} else {
		function calcRoute() {
			directionsService.route(
				directionsRequest,
				function (result, status) {
					if (status == "OK") {
						// render route
						directionsDisplay.setDirections(result);

						// Distance and Duration of route

						const start = document.querySelector("#start");
						const end = document.querySelector("#end");
						const duration = document.querySelector("#duration");
						const distance = document.querySelector("#distance");

						// show output with information on route

						start.textContent = `From: ${from.value}`;
						end.textContent = `To: ${to.value}`;
						distance.textContent = `Distance: ${result.routes[0].legs[0].distance.text}`;
						duration.textContent = `Duration: ${result.routes[0].legs[0].duration.text}`;
					} else {
						alert(
							"Failed to get directions! Check your inputted locations"
						);
					}
				}
			);
		}

		calcRoute();
	}
});
getCurrentLocation();
