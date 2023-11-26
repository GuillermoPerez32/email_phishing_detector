import { Avatar, Grid } from "@mui/material";
import { Card } from "../Card";
import { deepOrange } from "@mui/material/colors";
import { SearchInput } from "./SearchInput";

export const NavBar = () => {
  return (
    <Card width="auto" paddingX={6} paddingY={5}>
      <Grid container>
        <Grid item sm={8} display="flex" alignItems="center">
          <SearchInput />
        </Grid>
        <Grid
          item
          sm={4}
          display="flex"
          justifyContent="end"
          alignItems="center"
        >
          <Avatar sx={{ bgcolor: deepOrange[500] }} sizes="40px">
            GP
          </Avatar>
        </Grid>
      </Grid>
    </Card>
  );
};
