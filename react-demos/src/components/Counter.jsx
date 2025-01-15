import React from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div style={{ width: "50vw" }}>
          <h2 className="text-center">Count: {counter}</h2>
          <div className="d-grid gap-2 col-1 mx-auto">
            <button className="btn btn-primary" onClick={handleCounter}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
