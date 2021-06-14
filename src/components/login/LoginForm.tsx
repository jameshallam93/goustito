import React from "react";

import { UserDetailsForm } from "./UserDetailsForm/UserDetailsForm";
import { Notification, MessageType } from "../pageElements/notification/Notification";
import { useNotification } from "../../hooks/useNotification";
import { loginService } from "../../services/login";
import { useDispatch } from "react-redux";
import { INIT_USER_RECIPES, SET_USER_DETAILS } from "../../redux/actions";

const LoginForm: React.FunctionComponent = () => {

	const dispatch = useDispatch();

	const [notification, setNotification] = useNotification();

	const handleLogin = async (event: React.FormEvent<HTMLFormElement>, username: string, password: string) => {
		event.preventDefault();
		try {
			const response = await loginService.attemptLogin({
				username,
				password
			});
			const user = response.data;
			dispatch(SET_USER_DETAILS(user.username));
			dispatch(INIT_USER_RECIPES(user.recipes));
			setNotification({ type: MessageType.message, message: `${user.username} logged in successfully` });
			return;
		} catch (e) {
			//todo - can I restructure error message data? e.e.response.data.error is messy
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