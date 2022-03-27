import React, { useState } from "react";

const CheckboxContext = React.createContext([false, () => {}]);

function CheckboxContextProvider(props) {
  const value = useState(false);
  return <CheckboxContext.Provider {...props} value={value} />;
}

const Checkbox = ({ children }) => {
  const [check, setCheck] = React.useContext(CheckboxContext);
  return (
    <>
      <input type="checkbox" value={check} onClick={() => setCheck(!check)} />
      {children}
    </>
  );
};

const DisplayCheckboxStatus = () => {
  const [check] = React.useContext(CheckboxContext);
  const status = check ? "Checked" : "Unchecked";
  return <span>{status}</span>;
};

const CompoundComponentWithNestedChildren = () => {
  return (
    <CheckboxContextProvider>
      <Checkbox>
        <hr />
        <div>
          <DisplayCheckboxStatus />
        </div>
      </Checkbox>
    </CheckboxContextProvider>
  );
};

export default CompoundComponentWithNestedChildren;
