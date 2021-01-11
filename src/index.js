import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useHover = (onHover) => {
  if (typeof onHover !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    const current = element.current;
    if (current) {
      current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (current) {
        current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);

  return element;
};

const App = () => {
  const onHover = () => console.log("Sombody hovered!");
  const markRef = useHover(onHover);
  return (
    <div className="App">
      <h1 ref={markRef}>Hello</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
