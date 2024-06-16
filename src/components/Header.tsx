import { useState } from "react";
import logo from "../assets/logo.png";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

const Header = () => {
	const [toggle, setToggle] = useState(false);

	const menu = [
		{
			id: 1,
			name: "Home",
		},
		{
			id: 2,
			name: "Movies",
		},
		{
			id: 3,
			name: "TV",
		},
		{
			id: 4,
			name: "Sports",
		},
		{
			id: 5,
			name: "News",
		},
		{
			id: 6,
			name: "Hubs",
		},
	];
	return (
		<div className="flex justify-between items-center p-4 px-10 absolute w-full bg-gradient-to-b from-[#1e2126] to-transparent">
			<img src={logo} alt="logo" className="w-20 cursor-pointer" />
			<ul className="hidden md:flex gap-8">
				{menu.map((item, index) => (
					<li
						key={index}
						className=" text-gray-400 text-[18px] font-medium cursor-pointer hover:bg-gray-700 hover:text-white px-3 pb-2 py-1 rounded-md transition-all duration-300 ease-in-out"
					>
						{item.name}
					</li>
				))}
			</ul>

			{/* mobile menu */}
			<div className="md:hidden">
				<h2
					onClick={() => setToggle(!toggle)}
					className="flex items-center text-[18px] font-medium cursor-pointer bg-gray-700 text-white px-3 pb-2 py-1 rounded-md transition-all duration-300 ease-in-out"
				>
					Home
					{!toggle ? (
						<ChevronDown className="mt-1 pl-1 " />
					) : (
						<ChevronUp className="mt-1 pl-1 " />
					)}
				</h2>
				{toggle && (
					<ul className="absolute bg-gray-700 w-[200px] text-center mt-3 rounded-lg left-0 right-0 mx-auto p-3">
						{menu.map((item, index) => (
							<li
								key={index}
								className=" text-gray-400 text-[18px] font-medium cursor-pointer hover:bg-gray-600 hover:text-white px-3 py-3 rounded-md transition-all duration-300 ease-in-out"
							>
								{item.name}
							</li>
						))}
					</ul>
				)}
			</div>
			{/* mobile menu */}

			<div className="flex gap-10">
				<Search
					className="cursor-pointer text-gray-400 hover:bg-gray-700 px-3 py-1 rounded-md transition-all duration-300 ease-in-out hover:text-white"
					size={"35px"}
				/>
				<h2 className="px-[10px] text-[20px] text-gray-400 border-2 border-white rounded-full cursor-pointer">
					R
				</h2>
			</div>
		</div>
	);
};

export default Header;
