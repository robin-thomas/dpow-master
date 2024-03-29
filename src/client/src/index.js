import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";
import DataProvider from "./components/utils/DataProvider";

import * as serviceWorker from "./components/app/serviceWorker";

import "./index.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";

const Nano = (props) => (
  <DataProvider>
    <App />
  </DataProvider>
);

ReactDOM.render(<Nano />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
