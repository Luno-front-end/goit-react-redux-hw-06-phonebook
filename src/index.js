import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";

import "./index.css";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <PersistGate loading={null} persistor={store.persistor}>
    <Provider store={store.store}>
      <App />
    </Provider>
  </PersistGate>,
  document.querySelector("#root")
);
