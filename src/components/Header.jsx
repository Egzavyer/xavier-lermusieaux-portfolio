/* eslint-disable react/jsx-key */
import React, { useState } from "react";
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

	return (
		<div className='shadow-md w-full fixed top-0 left-0 bg-headerFooterBgColor text-headerFooterTextColor whitespace-nowrap'>
			<div className='flex lg:px-10 py-4 px-7 lg:flex justify-between'>
				{/*Logo*/}
				<div className='flex text-2xl cursor-pointer gap-1 '>
					<span className='font-bold'>Xavier Lermusieaux</span>
				</div>

				{/*Mobile Nav*/}
				<div
					onClick={() => setIsOpen(!isOpen)}
					className='w-7 h-7 absolute right-8 top-6 cursor-pointer lg:hidden'
				>
					{isOpen ? <XMarkIcon /> : <Bars4Icon />}
				</div>

				{/*NavLinks*/}
				<ul
					className={`lg:flex pl-9 lg:pl-0 lg:items-center lg:pb-0 pb-12 absolute lg:z-auto z-[-1] left-0 w-full transition-all bg-headerFooterBgColor duration-500 ease-in ${
						isOpen ? "top-12" : "hidden"
					}`}
				>
					{Links.map((link) => (
						<li className='font-semibold my-7 lg:my-0 lg:ml-8'>
							<a href='/'>{link.name}</a>
						</li>
					))}
					<button className='bg-accentColor py-1 px-3 lg:ml-8 rounded lg:static'>
						Hire Me
					</button>
				</ul>
			</div>
		</div>
	);
};
export default Header;
