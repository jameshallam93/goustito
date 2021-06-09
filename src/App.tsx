import React from "react";
import { SearchBar } from "./components/searchBar/SearchBar";
import { RecipeList } from "./components/recipeList/RecipeList";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <h1>Goustito</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;
