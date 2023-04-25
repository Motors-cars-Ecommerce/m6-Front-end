import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GlobalStyle } from "./styles/componets/global";
<<<<<<< HEAD

import { BrowserRouter } from "react-router-dom";
import { DataUserProvider } from "./contexts/userContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataUserProvider>
        <GlobalStyle />
        <App />
      </DataUserProvider>
=======
import { BrowserRouter } from "react-router-dom";
import Providers from "./contexts/Provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <GlobalStyle />
        <App />
      </Providers>
>>>>>>> 824d11ccf6f3fbe21ad9978724e8b9c1c35ff85b
    </BrowserRouter>
  </React.StrictMode>
);
