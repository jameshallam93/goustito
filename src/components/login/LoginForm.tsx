import React from "react";

import { UserDetailsForm } from "./UserDetailsForm/UserDetailsForm";

const LoginForm: React.FunctionComponent = () => {

	const handleLogin = (event: React.FormEvent<HTMLFormElement>, username: string, password: string) => {
		console.log(username, password);
		return;
	};
	return (
		<div className="login-form">
			<UserDetailsForm
				heading="Login"
				handleSubmit={handleLogin}
				requireValidation={false}
			/>
		</div>

	);
};


export { LoginForm };