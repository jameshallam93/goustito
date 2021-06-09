import React, { useState } from "react";
import { SearchBar } from "./components/searchBar/SearchBar"
const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <h1>Goustito</h1>
      <SearchBar />
    </div>
  );
};

export default App;
