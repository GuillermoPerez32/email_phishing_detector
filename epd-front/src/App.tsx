import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

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
        <Outlet />
        <Footer />
      </VStack>
    </>
  );
};

export { App };
