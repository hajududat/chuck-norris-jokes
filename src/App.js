import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.icndb.com/jokes/random")
      .then((result) => setData(result.data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <h1>{data.value.joke}</h1>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <button className="btn btn__primary">Click</button>
        </div>
      </div>
    </div>
  );
}

export default App;
