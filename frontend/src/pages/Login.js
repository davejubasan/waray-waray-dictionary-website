import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<section className="relative flex flex-col items-center h-screen px-10 py-20">
			<img className="w-full max-w-md"
				src='/assets/images/waray-waray-dictionary-logo-white.png'
				alt="logo-white" />
			<form action="#" method="POST" className="flex flex-col gap-8 mt-16 laptop:w-1/4 mobile:w-full">
				<input className="main-input-field" type="text" name="username" id="usernameID" placeholder="Username" />
				<input className="main-input-field" type="password" name="password" id="passwordID" placeholder="Password" />
				<button type="submit" className="main-btn">LOGIN</button>
			</form>
			<section className="mt-8">
				<Link to='/register'>
					<button type="button" className="flex items-center text-sm text-center text-white font-montserrat">
						<span>Create new account</span>
						<svg className="inline-block w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
					</button>
				</Link>
			</section>
		</section >
	);
}
