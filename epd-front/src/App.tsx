import { Box, Grid, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
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
        spacing={4}
        sx={{
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Grid item sm={2}>
          <SideBar />
        </Grid>
        <Grid item sm={10} width="10%">
          <NavBar />
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export { App };
