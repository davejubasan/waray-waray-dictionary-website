import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
	return (
		<section className="relative flex flex-col items-center h-screen px-10 py-20">
			<h1 className="text-5xl font-bold text-aesthetic-500 font-poppins">Register</h1>
			<form action="#" method="POST" className="flex flex-col gap-8 mt-16 laptop:w-1/4 mobile:w-full">
				<input className="main-input-field" type="text" name="fullname" id="fullnameField" placeholder="Full name" />
				<input className="main-input-field" type="email" name="email" id="emailField" placeholder="Email address" />
				<input className="main-input-field" type="text" name="username" id="usernameField" placeholder="Username" />
				<input className="main-input-field" type="password" name="password" id="passwordField" placeholder="Password" />
				<input className="main-input-field" type="password" name="retype-password" id="retypePasswordField" placeholder="Retype password" />

				<select id="userType" className="block py-2.5 px-4 w-full text-gray-700 border-0 rounded-md border-slate-100 appearance-none font-poppins focus:ring-0 text-base focus:border-aesthetic-500 ">
					<option value="contributor">Contributor</option>
					<option value="linguist">Member linguist</option>
					<option value="linguist">Head linguist</option>
					<option value="linguist">Super admin</option>
				</select>

				<button type="submit" className="main-btn">REGISTER</button>
			</form>
			<section className="mt-8">
				<Link to='/'>
					<button type="button" className="flex items-center text-sm text-center text-white font-montserrat">
						<svg className="inline-block w-4 h-4 mr-2 transform scale-x-[-1] " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
						<span>Already have an account</span>
					</button>
				</Link>
			</section>
		</section>
	);
}
