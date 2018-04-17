import axios from "axios";

const API_KEY = "c35eee9fb6b67a4f7d221f1d35280950";
// ES6 template string
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

// Focusing on AJAX request
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // Returns a promise

  console.log("Request:", request);

  // payload is optional
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
