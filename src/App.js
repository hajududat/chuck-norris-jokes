import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [refetch, setRefetch] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.icndb.com/jokes/random");
      try {
        setData(result.data);
      } catch(err) {
        console.error(err);
      }
      setRefetch(false)
    };
    if (refetch === true) {
      fetchData();
    }
    
  }, [refetch]);

  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <div className="card">{data ? data.value.joke.replace(/&quot;/g, '"') : "Loading..." }</div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <button
            type="button"
            className="btn btn__primary"
            onClick={() => { setRefetch(true) }}
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
