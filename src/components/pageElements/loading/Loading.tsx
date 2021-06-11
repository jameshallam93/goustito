import React from "react";
import { useSelector } from "react-redux";

import { RecipeState } from "../../../redux/reducer";

import loadingIcon from "../../../assets/loading-icon.gif";
import "./loading.scss";

const Loading: React.FunctionComponent = () => {
	const isLoading = useSelector<RecipeState, boolean>(state => state.isLoading);

	if (isLoading) {
		return (
			<section className="loading">
				<h1>loading...</h1>
				<img src={loadingIcon} alt="loading"></img>
			</section>
		);
	}
	return null;
};

export { Loading };