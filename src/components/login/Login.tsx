import React from "react";

import { useTogglable } from "../../hooks/useTogglable";
import { UserDetailsForm } from "./UserDetailsForm";

import "./login.scss";


const Login: React.FunctionComponent = () => {

	const [hidden, changeHidden] = useTogglable(true);

	const handleLogin = (event: React.FormEvent<HTMLFormElement>, username: string, password: string) => {
		console.log(username, password);
		return;
	};
	const handleSignup = (event: React.FormEvent<HTMLFormElement>, username: string, password: string) => {
		console.log(username, password);
		return;
	};

	const signupButtonText = hidden ? "Signup" : "Hide Signup";

	return (
		<section className="login">
			<div className="login-form">
				<UserDetailsForm
					heading="Login"
					handleSubmit={handleLogin}
					requireValidation={false}
				/>
			</div>

			<div className="spacer" />

			<button onClick={changeHidden}>
				{signupButtonText}
			</button>

			<div className="spacer" />

			<div className={`sign-up-form ${hidden && "hide"}`}>
				<p>N.B. This app is designed for demo purposes only - passwords are hashed, but it is STRONGLY recommended not to use existing passwords</p>
				<UserDetailsForm
					heading="Signup"
					handleSubmit={handleSignup}
					requireValidation={true}
				/>
			</div>

		</section>
	);
};
export { Login };