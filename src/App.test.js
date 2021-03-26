import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
