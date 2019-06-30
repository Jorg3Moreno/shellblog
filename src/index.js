import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

import "./css/index.css";

// 1. first step for use Redux
const store = createStore(
  reducers, //todos los reducers de la app
  {}, // initial state
  applyMiddleware(reduxThunk)
);

//3. thirt step add Provider and pass store prop
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
