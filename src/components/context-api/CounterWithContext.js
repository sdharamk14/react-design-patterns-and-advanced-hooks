import React from "react";
import useCountContext from "../custom-hooks/useCountContext";

const CounterWithContext = () => {
  const [, setCount] = useCountContext();
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment counter
      </button>
    </div>
  );
};

export default CounterWithContext;
