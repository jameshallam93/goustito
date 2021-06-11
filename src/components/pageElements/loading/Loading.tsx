import React from "react";
import { useSelector } from "react-redux";
import { RecipeState } from "../../../redux/reducer";

const Loading: React.FunctionComponent = () => {
	const isLoading = useSelector<RecipeState, boolean>(state => state.isLoading);

	if (isLoading) {
		return (
			<section className="loading">
				<h1>loading</h1>
			</section>
		);
	}
	return null;
};

export { Loading };