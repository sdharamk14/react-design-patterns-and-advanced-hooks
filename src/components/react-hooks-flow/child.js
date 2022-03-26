import React, { useEffect } from "react";

const Child = () => {
  console.log("%c Child app render start", "color: green");
  const [count, setCount] = React.useState(() => {
    console.log("%c Child app lazy initialization", "color: coral");
    return 0;
  });

  useEffect(() => {
    console.log(
      "%c Child app called useEffect on every update",
      "color: yellow"
    );
    return () => {
      console.log("%c Child app cleanup on every update", "color: red");
    };
  });

  useEffect(() => {
    console.log(
      "%c Child app called useEffect no dependencies",
      "color: yellow"
    );
    return () => {
      console.log("%c Child app cleanup no dependencies", "color: red");
    };
  }, []);

  useEffect(() => {
    console.log(
      "%c Child app called useEffect with dependent value: " + count,
      "color: yellow"
    );
    return () => {
      console.log(
        "%c Child app cleanup with dependent value:" + count,
        "color: red"
      );
    };
  }, [count]);

  const element = (
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>
      Clicked {count}
    </button>
  );

  console.log("%c Child app render end", "color: green");

  return element;
};

export default Child;
