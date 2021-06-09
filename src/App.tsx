import React from "react";
import { SearchBar } from "./components/searchBar/SearchBar";
import { RecipeList } from "./components/recipeList/RecipeList";
import { useDispatch } from "react-redux";
import { SHOW_NEXT_PAGE } from "./redux/actions";

const App: React.FunctionComponent = () => {

  const dispatch = useDispatch();


  const nextPage = () => {
    dispatch(SHOW_NEXT_PAGE());
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };
  return (
    <div className="App">
      <h1>Goustito</h1>
      <SearchBar />
      <RecipeList />
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default App;
