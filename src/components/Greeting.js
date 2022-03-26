import React, { useEffect } from "react";

const Greeting = ({ initialState = "" }) => {
  const [name, setName] = React.useState(
    () => window.localStorage.getItem("name") || initialState
  );

  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);

  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <strong>{name ? name : `Please type your name`}</strong>
    </form>
  );
};

export default Greeting;
