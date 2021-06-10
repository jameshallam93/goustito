import React from "react";
import { UserDetailsForm } from "./UserDetailsForm";
import "./login.scss";
import { useTogglable } from "../../hooks/useTogglable";

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
				/>
			</div>
			<div className="spacer" />
			<button onClick={changeHidden}>
				{signupButtonText}
			</button>
			<div className="spacer" />
			<div className={`sign-up-form ${!hidden && "display"}`}>
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