import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecipeState } from "../../../redux/reducer";
import { changePage } from "./changePage";
import { Button } from "../../globals/button/Button";

import "./pageNavigation.scss";

const PageNavigation: React.FunctionComponent = () => {

	const dispatch = useDispatch();

	const startOfList = useSelector<RecipeState, boolean>((state) => state.resultsShown.from === 0);
	const endOfList = useSelector<RecipeState, boolean>((state) => state.resultsShown.to === 100);
	const recipesAreLoaded = useSelector<RecipeState, boolean>((state) => state.recipes[0]?.length > 0);

	return (
		<div className="page-navigation">
			<Button
				dissappear={() => `${endOfList ? "hide" : !recipesAreLoaded && "hide"}`}
				onClick={() => changePage("next", dispatch)}
				label={"next"}
			/>
			<Button
				dissappear={() => { return `${startOfList && "hide"}`; }}
				onClick={() => changePage("previous", dispatch)}
				label={"previous"}
			/>

		</div>
	);
};
export { PageNavigation };