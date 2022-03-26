import React from "react";

const ClickCounter = (props) => {
  return (
    <div>
      <button onClick={props.setCounter}>{props.counter}</button>
    </div>
  );
};

export default ClickCounter;
