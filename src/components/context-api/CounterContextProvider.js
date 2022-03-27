import React from "react";
import CounterContext from "./CounterContext";

const CounterContextProvider = (props) => {
  const value = React.useState(0);
  return <CounterContext.Provider {...props} value={value} />;
};

export default CounterContextProvider;
