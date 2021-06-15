import React from "react";

import "./recipeList.scss";

const InfoBar: React.FunctionComponent = () => {
	return (
		<div className="info">
			<h1>Click the star to save a recipe to your bank</h1>
			<p>Due to the limitations of the free api, only the first 100 results found can be scrolled through</p>
		</div>
	);
};

export { InfoBar };

