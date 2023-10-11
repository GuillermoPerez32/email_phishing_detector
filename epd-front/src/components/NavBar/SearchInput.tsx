import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useAppStore } from "../../services/filter";

export const SearchInput = () => {
  const { filter, changeFilter } = useAppStore();

  const handleChange = (e: any) => {
    changeFilter(e.target.value);
  };

  return (
    <Paper
      component="form"
      variant="outlined"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 260,
        height: 40,
        backgroundColor: "#F2F6FA",
        border: "0",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        value={filter}
        onSubmit={(e) => e.preventDefault()}
        onChange={handleChange}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search emails" }}
      />
    </Paper>
  );
};
