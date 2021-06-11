import React from "react";
import { UserDetailsForm } from "./UserDetailsForm/UserDetailsForm";

interface SignupFormProps {
	hidden: boolean
}

const SignupForm: React.FunctionComponent<SignupFormProps> = ({ hidden }) => {

	const handleSignup = (event: React.FormEvent<HTMLFormElement>, username: string, password: string) => {
		console.log(username, password);
		return;
	};

	return (
		<div className={`sign-up-form ${hidden && "hide"}`}>
			<p>N.B. This app is designed for demo purposes only - passwords are hashed, but it is STRONGLY recommended not to use existing passwords</p>
			<UserDetailsForm
				heading="Signup"
				handleSubmit={handleSignup}
				requireValidation={true}
			/>
		</div>

	);
};


export { SignupForm };