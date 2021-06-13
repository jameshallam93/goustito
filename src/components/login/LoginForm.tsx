import React from "react";

import { UserDetailsForm } from "./UserDetailsForm/UserDetailsForm";
import { Notification, MessageType } from "../pageElements/notification/Notification";
import { useNotification } from "../../hooks/useNotification";
import { loginService } from "../../services/login";

const LoginForm: React.FunctionComponent = () => {

	const [notification, setNotification] = useNotification();

	const handleLogin = async (event: React.FormEvent<HTMLFormElement>, username: string, password: string) => {
		event.preventDefault();
		const response = await loginService.attemptLogin({
			username,
			password
		});
		const user = response.data;
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