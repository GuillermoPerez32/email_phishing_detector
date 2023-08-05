import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { App } from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

import { Home } from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { EmailPhishing } from "./pages/EmailPhishing.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "emails",
        element: <EmailPhishing />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
