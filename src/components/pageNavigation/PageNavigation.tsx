import { useDispatch, useSelector } from "react-redux";
import { SHOW_NEXT_PAGE, SHOW_PREVIOUS_PAGE } from "../../redux/actions";
import { RecipeState } from "../../redux/reducer";


const PageNavigation: React.FunctionComponent = () => {

    const dispatch = useDispatch();
    const startOfList = useSelector<RecipeState, boolean>((state) => state.resultsShown.from === 0)

    const changePage = (direction: string): void => {
        if (direction === "next") {
            dispatch(SHOW_NEXT_PAGE());
        }
        if (direction === "previous") {
            dispatch(SHOW_PREVIOUS_PAGE())
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    //todo - move this logic to scss
    const showPrevious = { display: startOfList ? "none" : "" }

    return (
        <div className="page-navigation">
            <button style={showPrevious} onClick={() => changePage("previous")}>Previous</button>
            <button onClick={() => changePage("next")}>Next</button>
        </div>
    )
}
export { PageNavigation }