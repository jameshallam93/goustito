import React from "react";

import { Checkbox } from "./Checkbox";

interface CheckboxArrayProps {
	categories: string[],
	handleCheckboxChange: (label: string) => void,
}

const CheckboxArray: React.FunctionComponent<CheckboxArrayProps> = ({ categories, handleCheckboxChange }) => {
	return (
		<div className="checkbox-array">
			{
				categories.map(category => {
					return (
						<Checkbox
							label={category}
							handleCheckboxChange={handleCheckboxChange}
							key={category}
						/>
					);
				})
			}
		</div>
	);
};

export { CheckboxArray };