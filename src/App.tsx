import React from "react";
import { SearchBar } from "./components/searchBar/SearchBar";
import { RecipeList } from "./components/recipeList/RecipeList";
import { PageNavigation } from "./components/pageNavigation/PageNavigation";
import { Header } from "./components/pageElements/header/Header";
import "./app.scss"

const App: React.FunctionComponent = () => {

  return (
    <div className="App">

      <Header />
      <div className="page-content">
        <SearchBar />
        <RecipeList />
        <PageNavigation />
      </div>
    </div>
  );
};

export default App;
