import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const handleReveal = (event) => {
  const contact = document.getElementById("contact");

  console.log(event.currentTarget.scrollTop);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App onScroll={(e) => handleReveal(e)} />);
