import React, { useState } from "react";

import { useField } from "../../../hooks/useField";
import { DetailsValidator } from "./DetailsValidator";


interface UserDetailFormProps {
	heading: string,
	handleSubmit(event: React.FormEvent<HTMLFormElement>, username: string, password: string): void,
	requireValidation: boolean
}

const UserDetailsForm: React.FunctionComponent<UserDetailFormProps> = ({ heading, handleSubmit, requireValidation }) => {

	const username = useField("text");
	const password = useField("text");

	const hideOrShowButton = () => {
		if (requireValidation) {
			if (validDetails) {
				return "show";
			}
			return "hide";
		}
		return "show";
	};

	const [validDetails, setValidDetails] = useState(false);

	return (
		<div className="user-details-form">

			<h1>{heading}</h1>

			<form onSubmit={(event) => handleSubmit(event, username.value, password.value)}>
				<input
					type="text"
					value={username.value}
					onChange={username.onChange}
					placeholder="username"
				/>
				<input
					type="password"
					value={password.value}
					onChange={password.onChange}
					placeholder="password"
				/>
				<div className="spacer" />
				<input
					type="submit"
					className={`login-form-button ${hideOrShowButton()}`}
				/>
			</form>
			{
				requireValidation &&
				<DetailsValidator
					username={username.value}
					password={password.value}
					setValidDetails={setValidDetails}
				/>
			}
		</div>
	);
};

export { UserDetailsForm };