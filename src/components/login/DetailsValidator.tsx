import React, { useEffect } from "react";

import { validators } from "./validators/validators";

import "./detailsValidator.scss";

interface DetailsValidatorProps {
	username: string,
	password: string,
	setValidDetails: (truth: boolean) => void
}

const DetailsValidator: React.FunctionComponent<DetailsValidatorProps> = ({ username, password, setValidDetails }) => {

	useEffect(() => {
		if (validators.usernameIsValid(username) && validators.passwordIsValid(password)) {
			setValidDetails(true);
			return;
		}
		setValidDetails(false);
	}, [username, password]);

	return (
		<div className="details-validator">
			<p className={validators.usernameIsValid(username) ? "satisfied" : "unsatisfied"}>
				Username must be at least 6 characters
			</p>
			<p className={validators.passwordLength(password) ? "satisfied" : "unsatisfied"}>
				Password must be at least 6 characters
			</p>
			<p className={validators.passwordContainsUpper(password) ? "satisfied" : "unsatisfied"}>
				Password must contain uppercase letter
			</p>
			<p className={validators.passwordContainsNumber(password) ? "satisfied" : "unsatisfied"}>
				Password must contain a number
			</p>
			<p className={validators.passwordContainsSpecial(password) ? "satisfied" : "unsatisfied"}>
				Password must contain a special character
			</p>
		</div>
	);
};

export { DetailsValidator };