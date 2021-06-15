import React from "react";

import "./button.scss";

type ButtonProps = {
	label: string,
	onClick: () => void,
	hideOrShow?: () => string
}

const Button: React.FunctionComponent<ButtonProps> = ({ label, onClick, hideOrShow }) => {

	return (
		<div>
			<button
				className={hideOrShow && hideOrShow()}
				onClick={onClick}
			>
				{label}
			</button>
		</div >
	);
};


export { Button };