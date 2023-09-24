import { Box, VStack } from "@chakra-ui/react";
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
        <Box height="100%">
          <Outlet />
        </Box>
        <Footer />
      </VStack>
    </>
  );
};

export { App };
