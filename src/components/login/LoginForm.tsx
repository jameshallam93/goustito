import React from "react";

import { UserDetailsForm } from "./UserDetailsForm/UserDetailsForm";
import { Notification, MessageType } from "../pageElements/notification/Notification";
import { useNotification } from "../../hooks/useNotification";
import { useDispatch, useSelector } from "react-redux";
import { ATTEMPT_LOGIN } from "../../redux/actions";
import { AppState } from "../../redux/store";
import { useEffect } from "react";

const LoginForm: React.FunctionComponent = () => {

	const dispatch = useDispatch();

	const currentUser = useSelector<AppState, string | null>(state => state.users.user.username);
	const loginError = useSelector<AppState, string | null>(state => state.users.loginError.error);
	const [notification, setNotification] = useNotification();

	useEffect(() => {
		if (currentUser) {
			setNotification({
				type: MessageType.message,
				message: `${currentUser} logged in successfully`
			});
			return;
		}
		if (loginError) {
			setNotification({
				type: MessageType.error,
				message: loginError
			});
		}
	}, [currentUser, loginError]);

	const handleLogin = async (event: React.FormEvent<HTMLFormElement>, username: string, password: string) => {
		event.preventDefault();
		dispatch(ATTEMPT_LOGIN({ username, password }));
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