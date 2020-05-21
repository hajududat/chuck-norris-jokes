import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({ value: [] });
  const [url, setUrl] = useState("https://api.icndb.com/jokes/random");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);

      setData(result.data);
    };

    fetchData();
  }, [url]);

  function handleClick(e) {
    e.preventDefault();
    console.log("The button was clicked.");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <div className="card">{data.value.joke}</div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <button
            type="button"
            className="btn btn__primary"
            onClick={
              (() => setUrl(`https://api.icndb.com/jokes/random`), handleClick)
            }
          >
            Make Onions Cry
            <span role="img" aria-label="emoji">
              👉
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
