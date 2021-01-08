import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    const current = element.current;
    if (current) {
      current.addEventListener("click", onClick);
    }
    return () => {
      if (current) {
        current.removeEventListener("click", onClick);
      }
    };
  });

  return element;
};

const App = () => {
  const onClick = () => console.log("hello");
  const element = useClick(onClick);
  return (
    <div className="App">
      <h1 ref={element}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
