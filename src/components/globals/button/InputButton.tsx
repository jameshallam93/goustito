import React from "react";

import "./button.scss";

type InputButtonProps = {
	hideOrShow?: () => string
}

const InputButton: React.FunctionComponent<InputButtonProps> = ({ hideOrShow }) => {
	return (
		<>
			<input
				type="submit"
				className={`login-form-button ${hideOrShow && hideOrShow()}`}
			/>
		</>
	);
};

export { InputButton };