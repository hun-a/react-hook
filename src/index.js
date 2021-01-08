import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const isValid = typeof validator === "function" ? validator(value) : true;
    if (isValid) {
      setValue(event.target.value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const validator = (input) => input.length <= 10;
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
