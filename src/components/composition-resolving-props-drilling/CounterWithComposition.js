import React from "react";

const CounterWithComposition = ({ setCount, children }) => {
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment counter
      </button>
      {children}
    </div>
  );
};

export default CounterWithComposition;
