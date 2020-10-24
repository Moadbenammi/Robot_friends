import React from "react";
import ReactDOM from "react-dom";
import App from "../src/Conatiners/App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { searchRobots } from "./reducers";
import { createStore } from "redux";

const store = createStore(searchRobots);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
