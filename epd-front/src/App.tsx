import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";

const App = () => {
  return (
    <>
      <Box
        justifyContent={"space-between"}
        flexDirection={"column"}
        alignItems="stretch"
        height="100vh"
      >
        <SideBar />
        <NavBar />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
};

export { App };
