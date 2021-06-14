import React from "react";

import { useTogglable } from "../../hooks/useTogglable";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

import "./loginPage.scss";
import { Button } from "../globals/button/Button";


const LoginPage: React.FunctionComponent = () => {

	const [hidden, changeHidden] = useTogglable(true);

	const signupButtonText = (): string => hidden ? "Signup" : "Hide Signup";

	return (
		<section className="login">
			<LoginForm />
			<div className="spacer" />
			<Button
				onClick={changeHidden}
				label={signupButtonText()}
			/>
			<SignupForm hidden={hidden} />
			<div className="spacer" />
		</section>
	);
};

export { LoginPage };