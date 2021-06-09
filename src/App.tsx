import React, { useState } from "react";

const App: React.FunctionComponent = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [test, setTest] = useState("")

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(searchTerm)
    if (searchTerm !== null) {
      setTest(searchTerm)
    }
    return;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setSearchTerm(event.target.value)

  }
  return (
    <div className="App">
      <h1>Goustito</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => handleChange(event)}
        />
        <input
          type="submit"
        />
      </form>
      <p>{test}</p>
    </div>
  );
};

export default App;
