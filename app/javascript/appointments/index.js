import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

document.addEventListener("DOMContentLoaded", () => {
  const node = document.getElementById("appointments_data");
  const data = JSON.parse(node.getAttribute("data"));

  ReactDOM.render(
    <App appointments={data} />,
    document.body.appendChild(document.createElement("div"))
  );
});
