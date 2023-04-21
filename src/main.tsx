import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GlobalStyle } from "./styles/componets/global";

import { BrowserRouter } from "react-router-dom";
import Providers from "./contexts/Provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <GlobalStyle />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
