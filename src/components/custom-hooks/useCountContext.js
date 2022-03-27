import React from "react";
import CounterContext from "../context-api/CounterContext";

export default function useCountContext() {
  const context = React.useContext(CounterContext);
  if (!context) {
    throw new Error("context must be rendered within same three");
  }
  return context;
}
