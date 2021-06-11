import React from "react";

import { useTogglable } from "../../hooks/useTogglable";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

import "./loginPage.scss";


const LoginPage: React.FunctionComponent = () => {

	const [hidden, changeHidden] = useTogglable(true);

	const signupButtonText = hidden ? "Signup" : "Hide Signup";

	return (
		<section className="login">
			<LoginForm />
			<div className="spacer" />
			<button onClick={changeHidden}>
				{signupButtonText}
			</button>
			<SignupForm hidden={hidden} />
			<div className="spacer" />
		</section>
	);
};
export { LoginPage };