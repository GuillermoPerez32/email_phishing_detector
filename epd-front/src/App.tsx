import { VStack } from "@chakra-ui/react";
import { Body } from "./components/Body";
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
        <Body />
        <Footer />
      </VStack>
    </>
  );
};

export { App };
