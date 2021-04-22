import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import CartContextProvider from "./context/cartContext";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

ReactDOM.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>,
  document.querySelector("#root")
);
