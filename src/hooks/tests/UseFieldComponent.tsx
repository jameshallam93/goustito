import React from "react";
import { useField } from "../useField";


const UseFieldComponent: React.FunctionComponent = () => {
	const testField = useField("text");

	return (
		<div>
			<form className="test-form">
				<input
					type={testField.type}
					value={testField.value}
					onChange={testField.onChange}
					className="test-field"
				>

				</input>
			</form>
		</div>
	);
};


export { UseFieldComponent };