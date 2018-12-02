import React from "react";
import ReactDOM from "react-dom";
import List from "./components/List/index";
import Display from "./components/Display/index";
import Main from "./components/Main/index";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Main>
      <Display />
      <List />
    </Main>
  </Provider>,
  document.getElementById("app")
);
