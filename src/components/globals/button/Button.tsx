import React from "react";
import "./button.scss";

type ButtonProps = {
	label: string,
	onClick: (any: any) => any,//eslint-disable-line
	dissappear?: () => any
}

const Button: React.FunctionComponent<ButtonProps> = ({ label, onClick, dissappear }) => {

	return (
		<div>
			<button
				className={dissappear && dissappear()}
				onClick={onClick}
			>
				{label}
			</button>
		</div >
	);
};


export { Button };