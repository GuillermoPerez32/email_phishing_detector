import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export const PageInfo = () => {
  const location = useLocation();
  const name = location.pathname.replaceAll("/", "");

  const displayName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Box my={5} ml={2}>
      <Typography variant="h5">
        {name.length > 0 ? displayName : "Dashboard"}
      </Typography>
    </Box>
  );
};
