import React, { useState } from "react";
import { UserDetailsForm } from "./UserDetailsForm";
import "./login.scss";

const Login: React.FunctionComponent = () => {

	const [hidden, setHidden] = useState<boolean>(true);

	const handleLogin = () => {
		return;
	};
	const handleSignup = () => {
		return;
	};

	const expandSignup = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		setHidden(!hidden);
	};

	const signupStyle = { display: hidden ? "none" : "" };
	const signupButtonText = hidden ? "Signup" : "Hide Signup";

	return (
		<section className="login">
			<div className="login-form">
				<UserDetailsForm
					heading="Login"
					handleSubmit={handleLogin}
				/>
				<div className="spacer" />
				<button
					className="login-form-button"
					onClick={expandSignup}
				>
					{signupButtonText}
				</button>
			</div>
			<div className="spacer" />
			<div
				className="sign-up-form"
				style={signupStyle}
			>
				<p>N.B. This app is designed for demo purposes only - passwords are hashed, but it is STRONGLY recommended not to use existing passwords</p>
				<UserDetailsForm
					heading="Signup"
					handleSubmit={handleSignup}
				/>
			</div>

		</section>
	);
};
export { Login };