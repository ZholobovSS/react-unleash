import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FlagProvider from '@unleash/proxy-client-react';
import { unleashConfig } from "./configs/unleash.config";

ReactDOM.render(
  <React.StrictMode>
    <FlagProvider config={unleashConfig}>
      <App />
    </FlagProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
