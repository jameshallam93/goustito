import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecipeState } from "../../../redux/reducer";
import { changePage } from "./changePage";
import "./pageNavigation.scss";

const PageNavigation: React.FunctionComponent = () => {

	const dispatch = useDispatch();

	const startOfList = useSelector<RecipeState, boolean>((state) => state.resultsShown.from === 0);
	const endOfList = useSelector<RecipeState, boolean>((state) => state.resultsShown.to === 100);
	const recipesAreLoaded = useSelector<RecipeState, boolean>((state) => state.recipes[0]?.length > 0);

	return (
		<div className="page-navigation">
			<button
				className={`${endOfList ? "hide" : !recipesAreLoaded && "hide"}`}
				onClick={() => changePage("next", dispatch)}
			>
				Next
			</button>
			<button
				className={`${startOfList && "hide"}`}
				onClick={() => changePage("previous", dispatch)}
			>
				Previous
			</button>
		</div>
	);
};
export { PageNavigation };