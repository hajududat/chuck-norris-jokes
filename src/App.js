import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({ value: [] });
  const [url, setUrl] = useState("https://api.icndb.com/jokes/random");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
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
          <div className="card">
            {isError && (
              <div>
                <span role="img" aria-label="emoji">
                  😭
                </span>
                Something went wrong...
              </div>
            )}
            {isLoading ? <div>Loading ...</div> : <div>{data.value.joke}</div>}
          </div>
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
