import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GlobalStyle } from "./styles/componets/global";

import { BrowserRouter } from "react-router-dom";
import { DataUserProvider } from "./contexts/userContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataUserProvider>
        <GlobalStyle />
        <App />
      </DataUserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
