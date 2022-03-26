import React, { useEffect } from "react";
import useSyncLocalStorageWithState from "./custom-hooks/useSyncLocalStateWithHooks";

const GreetingWithCustomHooks = ({ initialState = "" }) => {
  const [name, setName] = useSyncLocalStorageWithState(initialState);

  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <strong>{name ? name : `Please type your name`}</strong>
    </form>
  );
};

export default GreetingWithCustomHooks;
