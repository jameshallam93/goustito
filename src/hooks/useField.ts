import { ChangeEvent, useState } from "react";

interface ReturnElements {
	type: string,
	value: string,
	onChange(event: ChangeEvent<HTMLInputElement>): void
}

const useField = (type: string): ReturnElements => {
	const [value, setValue] = useState("");

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return {
		type,
		value,
		onChange
	};
};

export { useField };
