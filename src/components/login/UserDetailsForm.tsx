import React from "react";
import { useField } from "../../hooks/useField";

interface UserDetailFormProps {
	heading: string,
	handleSubmit(event: React.FormEvent<HTMLFormElement>): void,
}

const UserDetailsForm: React.FunctionComponent<UserDetailFormProps> = ({ heading, handleSubmit }) => {

	const username = useField("text");
	const password = useField("text");

	return (
		<div className="user-details-form">
			<h1>{heading}</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={username.value}
					onChange={username.onChange}
					placeholder="username"
				/>
				<input
					type="text"
					value={password.value}
					onChange={password.onChange}
					placeholder="password"
				/>
				<div className="spacer" />
				<input
					type="submit"
					className="login-form-button"
				/>
			</form>
		</div>
	);
};

export { UserDetailsForm };