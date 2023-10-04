import { Avatar, Box, Grid } from "@mui/material";
import { Card } from "../Card";
import FilterButton from "./FilterButton";
import { deepOrange } from "@mui/material/colors";
import { SearchInput } from "./SearchInput";

export const NavBar = () => {
  return (
    <Card width="auto" paddingX={6} paddingY={5} marginBottom={8}>
      <Grid container>
        <Grid item sm={8} display="flex" alignItems="center">
          <FilterButton />
          <Box width={20} />
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
