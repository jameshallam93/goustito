import { SHOW_NEXT_PAGE, SHOW_PREVIOUS_PAGE } from "../../../redux/actions/actions";

export const changePage = (direction: string, dispatch: React.Dispatch<any>): void => { //eslint-disable-line
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