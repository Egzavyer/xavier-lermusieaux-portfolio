/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
	let Links = [
		{ name: "Home", link: "/" },
		{ name: "About Me", link: "/" },
		{ name: "My Resume", link: "/" },
		{ name: "My Projects", link: "/" },
		{ name: "Contact Me", link: "/" },
	];

	let [isOpen, setIsOpen] = useState(false);
	let [isTransition, setIsTransition] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
		setIsTransition(true);
	};

	// Function to handle resize event
	const handleResize = () => {
		if (window.innerWidth > 1024) {
			setIsOpen(false);
			setIsTransition(false);
		}
	};

	// Add event listener on component mount and remove on unmount
	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className='shadow-md w-full fixed top-0 left-0 bg-headerFooterBgColor text-headerFooterTextColor whitespace-nowrap'>
			<div className='flex lg:px-10 py-4 px-7 lg:flex items-center justify-between'>
				{/*Logo and Mobile Nav*/}
				<div className='flex items-center'>
					<div className='flex text-2xl cursor-pointer gap-1'>
						<span className='font-bold'>Xavier Lermusieaux</span>
					</div>
					<div
						onClick={toggleDropdown}
						className='w-7 h-7 absolute right-8 top-6 cursor-pointer lg:hidden'
					>
						{isOpen ? <XMarkIcon /> : <Bars4Icon />}
					</div>
				</div>

				{/*NavLinks*/}
				<ul
					className={`lg:flex pl-9 lg:pl-0 lg:items-center lg:pb-0 pb-12 absolute lg:relative lg:z-auto z-[-1] left-0 w-full justify-end ${
						isTransition ? "transition-all duration-500 ease-in" : ""
					} bg-headerFooterBgColor ${
						isOpen ? "top-12 lg:top-auto" : "top-[-490px] lg:top-auto"
					}`}
				>
					{Links.map((link) => (
						<li className='font-semibold my-7 lg:my-0 lg:ml-8'>
							<a className='hover:text-accentColor' href='/'>
								{link.name}
							</a>
						</li>
					))}
					<button className='bg-accentColor hover:bg-darkerColor py-1 px-3 lg:ml-8 rounded lg:static transition-colors duration-200'>
						Hire Me
					</button>
				</ul>
			</div>
		</div>
	);
};
export default Header;
