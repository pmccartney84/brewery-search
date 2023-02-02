import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { BasicAppApp } from "./app";

// Use the BrowserRouter here to allow for other apps to consume this component with their
// own instance of `react-router` Router. Could be replaced with MemoryRouter or other Router implmentations.
ReactDOM.render(
    <BasicAppApp />,
  document.getElementById("root")
);
