import React, { useEffect, useState } from "react";

const CounterRenderProps = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    return () => {
      setCounter(0);
    };
  }, []);

  return props.render(counter, setCounter);
};

export default CounterRenderProps;
