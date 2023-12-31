import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

import { AppRouter } from "./router/AppRouter.tsx";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
