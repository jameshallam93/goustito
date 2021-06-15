import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../../../redux/store";
import { changePage } from "./changePage";
import { Button } from "../../globals/button/Button";

import "./pageNavigation.scss";


const PageNavigation: React.FunctionComponent = () => {

	const dispatch = useDispatch();

	const startOfList = useSelector<AppState, boolean>((state) => state.recipes.resultsShown.from === 0);
	const endOfList = useSelector<AppState, boolean>((state) => state.recipes.resultsShown.to === 100);
	const recipesAreLoaded = useSelector<AppState, boolean>((state) => state.recipes.recipes?.length > 0);

	return (
		<div className="page-navigation">
			<Button
				hideOrShow={() => `${endOfList ? "hide" : !recipesAreLoaded && "hide"}`}
				onClick={() => changePage("next", dispatch)}
				label={"next"}
			/>
			<Button
				hideOrShow={() => { return `${startOfList && "hide"}`; }}
				onClick={() => changePage("previous", dispatch)}
				label={"previous"}
			/>

		</div>
	);
};
export { PageNavigation };