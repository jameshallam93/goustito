import React from "react";
import { useTogglable } from "../useTogglable";


const UseTogglableComponent: React.FunctionComponent = () => {
	const [toggler, setToggle] = useTogglable(false);

	return (
		<div>
			<button onClick={setToggle} className="togglable-button">
				{toggler.toString()}
			</button>
		</div>
	);
};


export { UseTogglableComponent };