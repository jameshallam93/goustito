import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SHOW_NEXT_PAGE, SHOW_PREVIOUS_PAGE } from "../../../redux/actions";
import { RecipeState } from "../../../redux/reducer";

import "./pageNavigation.scss";

const PageNavigation: React.FunctionComponent = () => {

	const dispatch = useDispatch();

	const startOfList = useSelector<RecipeState, boolean>((state) => state.resultsShown.from === 0);
	const endOfList = useSelector<RecipeState, boolean>((state) => state.resultsShown.to === 100);
	const recipesAreLoaded = useSelector<RecipeState, boolean>((state) => state.recipes[0]?.length > 0);

	const changePage = (direction: string): void => {
		if (direction === "next") {
			dispatch(SHOW_NEXT_PAGE());
		}
		if (direction === "previous") {
			dispatch(SHOW_PREVIOUS_PAGE());
		}
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	return (
		<div className="page-navigation">
			<button
				className={`${endOfList ? "hide" : !recipesAreLoaded && "hide"}`}
				onClick={() => changePage("next")}
			>
				Next
			</button>
			<button
				className={`${startOfList && "hide"}`}
				onClick={() => changePage("previous")}
			>
				Previous
			</button>
		</div>
	);
};
export { PageNavigation };