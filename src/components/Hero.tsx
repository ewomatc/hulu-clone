import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { Play } from "lucide-react";

interface Movie {
	backdrop_path: string;
	original_title: string;
}

const Hero = () => {
	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

	const [movie, setMovie] = useState<Movie | null>(null);

	useEffect(() => {
		getPopularMovies();
	}, []);

	const getPopularMovies = () => {
		GlobalApi.getPopularMovies.then((response) => {
			const result = response.data.results;
			setMovie(result[1]);
		});
	};

	return (
		<div>
			<div className="absolute h-[85vh] bg-gradient-to-t from-[#1e2126] via-transparent to-transparent w-full"></div>
			<div className="absolute mt-[400px] md:mt-[350px] px-10 md:px-[24px]">
				<h2 className="text-white text-[19px] lg:text-[27px] font-bold">
					Watch only on HULU
				</h2>
				<h2 className="text-white text-[36px] lg:text-[47px] font-extrabold">
					{movie?.original_title}
				</h2>
				<div className="flex gap-5 mt-5">
					<button className="flex items-center bg-white text-black rounded-md border-2 border-white cursor-pointer hover:border-gray-400">
						{" "}
						{<Play size={"14px"} className="pr-1" />}PLAY
					</button>
					<button className="bg-transparent rounded-md border-2 border-white text-white cursor-pointer hover:border-gray-400">
						DETAILS
					</button>
				</div>
			</div>
			<img
				src={`${IMAGE_BASE_URL}${movie?.backdrop_path}`}
				width={1920}
				height={1080}
				className="h-[85vh] object-cover"
			/>
		</div>
	);
};

export default Hero;
