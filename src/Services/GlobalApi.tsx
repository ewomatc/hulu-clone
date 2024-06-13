import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3/movie";
const api_key = "0a278a00db19d0a720e3462ae33b6c07";

const getPopularMovies = axios.get(
	`${movieBaseURL}/popular?api_key=${api_key}`
);

export default {
	getPopularMovies,
};
