import React from "react";

const HoverCounter = (props) => {
  return (
    <div>
      <button onMouseOver={props.setCounter}>{props.counter}</button>
    </div>
  );
};

export default HoverCounter;
