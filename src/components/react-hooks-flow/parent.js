import React, { useEffect, useState } from "react";
import Child from "./child";
import reactHookFlow from "../../images/react-hooks-flow.png";
const Parent = () => {
  console.log("%c Parent app render start", "color: green");
  const [showChild, setShowChild] = useState(() => {
    console.log("%c Parent app state lazy initialization", "color: coral");
    return false;
  });

  useEffect(() => {
    console.log(
      "%c Parent app called useEffect on every update",
      "color: yellow"
    );
    return () => {
      console.log("%c Parent app cleanup on every update", "color: red");
    };
  });

  useEffect(() => {
    console.log(
      "%c Parent app called useEffect no dependencies",
      "color: yellow"
    );
    return () => {
      console.log("%c Parent app cleanup no dependencies", "color: red");
    };
  }, []);

  useEffect(() => {
    console.log(
      "%c Parent app called useEffect with dependent value: " + showChild,
      "color: yellow"
    );
    return () => {
      console.log(
        "%c Parent app cleanup with dependent value:" + showChild,
        "color: red"
      );
    };
  }, [showChild]);

  const element = (
    <>
      <img
        width="400px"
        height="400px"
        src={reactHookFlow}
        alt="React Hooks Flow"
      />
      <hr />
      <h2>Parent Component Start</h2>
      <p>Check console logs for understanding the flow</p>
      <input
        type="checkbox"
        value={showChild}
        onChange={() => setShowChild(!showChild)}
      />
      {showChild ? <Child /> : null}
    </>
  );

  console.log("%c Parent app rendering end", "color: green");
  return element;
};

export default Parent;
