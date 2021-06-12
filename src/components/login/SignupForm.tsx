import React from "react";

import { UserDetailsForm } from "./UserDetailsForm/UserDetailsForm";
import { Notification, MessageType } from "../pageElements/notification/Notification";
import { useNotification } from "../../hooks/useNotification";


interface SignupFormProps {
	hidden: boolean
}

const SignupForm: React.FunctionComponent<SignupFormProps> = ({ hidden }) => {

	const [notification, setNotification] = useNotification();

	const handleSignup = (event: React.FormEvent<HTMLFormElement>, username: string, password: string) => {
		event.preventDefault();
		setNotification({ type: MessageType.message, message: "test" });
		return;
	};

	return (
		<div className={`sign-up-form ${hidden && "hide"}`}>
			<Notification notification={notification} />
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