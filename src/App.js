import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  // const YOUR_APP_ID = "9162e998";
  // const YOUR_APP_KEY = "8a4076f902f506b4607f8305ce90b1ff";

  const [query, setQuery] = useState("");

  let url =
    "https://api.edamam.com/search?q=chicken&app_id=9162e998&app_key=8a4076f902f506b4607f8305ce90b1ff&&health=alcohol-free";

  async function getRecipes() {
    let result = await Axios.get(url);
    console.log(result.data);
  }

  return (
    <div className="App">
      <h1 onClick={getRecipes}>Food Recipe Plaza</h1>
      <form className="app__searchForm">
        <input type="text" placeholder="enter ingrident" value={query} />
      </form>
    </div>
  );
}

export default App;
