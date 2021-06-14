import React from "react";

import { UserDetailsForm } from "./UserDetailsForm/UserDetailsForm";
import { Notification, MessageType } from "../pageElements/notification/Notification";
import { useNotification } from "../../hooks/useNotification";
import { loginService } from "../../services/login";

const LoginForm: React.FunctionComponent = () => {

	const [notification, setNotification] = useNotification();

	const handleLogin = async (event: React.FormEvent<HTMLFormElement>, username: string, password: string) => {
		event.preventDefault();
		try {
			const response = await loginService.attemptLogin({
				username,
				password
			});
			const user = response.data;
			setNotification({ type: MessageType.error, message: `${user.username} logged in successfully` });
			return;
		} catch (e) {
			//todo - can I restructure error message data? e.e.respons.data.error is messy
			setNotification({ type: MessageType.error, message: e.e.response.data.error });
		}
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