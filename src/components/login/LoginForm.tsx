import React from "react";

import { UserDetailsForm } from "./UserDetailsForm/UserDetailsForm";
import { Notification, MessageType } from "../pageElements/notification/Notification";
import { useNotification } from "../../hooks/useNotification";
import { loginService } from "../../axios/login";

const LoginForm: React.FunctionComponent = () => {

	const [notification, setNotification] = useNotification();

	const handleLogin = async (event: React.FormEvent<HTMLFormElement>, username: string, password: string) => {
		event.preventDefault();
		const response = await loginService.attemptLogin({
			username,
			password
		});
		console.log(response);
		const user = response?.data;
		console.log(user);
		setNotification({ type: MessageType.message, message: `${user.username} logged in successfully` });
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