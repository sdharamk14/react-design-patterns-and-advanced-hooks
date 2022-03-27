import React from "react";
import useCountContext from "../custom-hooks/useCountContext";

const CounterDisplayWithContext = () => {
  const [count] = useCountContext();
  return <div>Counter value is {count}</div>;
};

export default CounterDisplayWithContext;
