import { useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";

const Hero = () => {
	useEffect(() => {
		getPopularMovies();
	}, []);

	const getPopularMovies = () => {
		GlobalApi.getPopularMovies.then((response) => {
			console.log(response.data.results);
		});
	};

	return <div>Hero</div>;
};

export default Hero;
