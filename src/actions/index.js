import secrets from "../secret";
import axios from "Axios";
export const FETCH_WEATHER = "FETCH_WEATHER";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${
	secrets.API_KEY
}`;
export function fetchWeather(city) {
	console.log("api key", secrets.API_KEY);
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	console.log(url);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
