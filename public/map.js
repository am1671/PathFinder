require("dotenv").config();

const apiKey = process.env.API_KEY;

const apiUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=places`;

const script = document.createElement("script");
script.src = apiUrl;
script.defer = true;
script.async = true;
document.body.appendChild(script);
