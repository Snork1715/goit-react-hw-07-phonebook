import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./redux/store";
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
import App from "./App";

// const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>,

  document.getElementById("root")
);
