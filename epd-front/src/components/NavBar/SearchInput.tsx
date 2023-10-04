import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export const SearchInput = () => {
  return (
    <Paper
      component="form"
      variant="outlined"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 200,
        backgroundColor: "#F2F6FA",
        border: "0",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search emails" }}
      />
    </Paper>
  );
};
