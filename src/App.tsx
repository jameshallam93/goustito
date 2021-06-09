import React from "react";
import { SearchBar } from "./components/searchBar/SearchBar";
import { RecipeList } from "./components/recipeList/RecipeList";
import { PageNavigation } from "./components/pageNavigation/PageNavigation";

const App: React.FunctionComponent = () => {

  return (
    <div className="App">
      <h1>Goustito</h1>
      <SearchBar />
      <RecipeList />
      <PageNavigation />
    </div>
  );
};

export default App;
