import { VStack } from "@chakra-ui/react";
import { EmailPhishing } from "./pages/EmailPhishing";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EmailPhishing />,
  },
]);

const App = () => {
  return (
    <>
      <VStack
        justifyContent={"space-between"}
        direction={"column"}
        align="stretch"
        height="100vh"
      >
        <NavBar />
        <RouterProvider router={router} />
        <Footer />
      </VStack>
    </>
  );
};

export { App };
