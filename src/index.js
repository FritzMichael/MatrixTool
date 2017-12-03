import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { createStore } from "redux";
import matrixApp from "./reducers";

let store = createStore(
  matrixApp,
  { rows: 3 },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
registerServiceWorker();
