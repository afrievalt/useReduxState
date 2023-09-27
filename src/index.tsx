import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./components/Home";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
