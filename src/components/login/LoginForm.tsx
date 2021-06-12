import React from "react";

import { UserDetailsForm } from "./UserDetailsForm/UserDetailsForm";
import { Notification, MessageType } from "../pageElements/notification/Notification";
import { useNotification } from "../../hooks/useNotification";

const LoginForm: React.FunctionComponent = () => {

	const [notification, setNotification] = useNotification();

	const handleLogin = (event: React.FormEvent<HTMLFormElement>, username: string, password: string) => {
		event.preventDefault();
		setNotification({ type: MessageType.error, message: "Test2" });
		console.log(username, password);
		return;
	};
	return (
		<div className="login-form">
			<Notification notification={notification} />
			<UserDetailsForm
				heading="Login"
				handleSubmit={handleLogin}
				requireValidation={false}
			/>
		</div>

	);
};


export { LoginForm };