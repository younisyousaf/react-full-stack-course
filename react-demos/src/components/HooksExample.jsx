import React, { useEffect, useState } from "react";

const HooksExample = () => {
  const [increment, setIncrement] = useState(0);
  const [data, setData] = useState({});
  // Basic Usage of useEffect
  useEffect(() => {
    // This will run after every render
    console.log("useEffect");
    return () => {
      // This will run before the component is removed from the DOM
      console.log("cleanup");
    };
  });

  //   useEffect with the dependency array
  useEffect(() => {
    document.title = `You clicked ${increment} times`;
  }, [increment]);

  //useEffect for getting data from an API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <button
        onClick={() => setIncrement(increment + 1)}
        className="btn btn-primary"
      >
        Click to Update Title
      </button>

      <ul className="list-group mt-3">
        <li className="list-group-item">id: {data.id}</li>
        <li className="list-group-item">title: {data.title}</li>
        <li className="list-group-item">body: {data.body}</li>
      </ul>
    </>
  );
};

export default HooksExample;
