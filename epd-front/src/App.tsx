import { Box, Grid, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";

const App = () => {
  const theme = useTheme();
  return (
    <Box
      height="100%"
      padding="12px"
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Grid
        container
        direction="row"
        spacing={8}
        sx={{
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Grid item sm={3}>
          <SideBar />
        </Grid>
        <Grid item width="10%">
          <NavBar />
          <Outlet />
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};

export { App };
