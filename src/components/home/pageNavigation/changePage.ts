import { NAVIGATION_ACTIONS } from "../../../redux/actions/actions";

export const changePage = (direction: string, dispatch: React.Dispatch<any>): void => { //eslint-disable-line
	if (direction === "next") {
		dispatch(NAVIGATION_ACTIONS.SHOW_NEXT_PAGE());
	}
	if (direction === "previous") {
		dispatch(NAVIGATION_ACTIONS.SHOW_PREVIOUS_PAGE());
	}
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};