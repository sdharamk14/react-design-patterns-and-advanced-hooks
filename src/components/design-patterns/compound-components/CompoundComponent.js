import React, { useState } from "react";

const Checkbox = ({ children }) => {
  const [check, setCheck] = useState(false);
  console.log(check);
  return (
    <>
      <input type="checkbox" value={check} onClick={() => setCheck(!check)} />
      {React.Children.map(children, (child) => {
        const newChild = React.cloneElement(child, { check });
        return newChild;
      })}
    </>
  );
};

const DisplayCheckboxStatus = ({ check }) => {
  const status = check ? "Checked" : "Unchecked";
  return <span>{status}</span>;
};

const CompoundComponent = () => {
  return (
    <>
      <Checkbox>
        <DisplayCheckboxStatus />
      </Checkbox>
    </>
  );
};

export default CompoundComponent;
