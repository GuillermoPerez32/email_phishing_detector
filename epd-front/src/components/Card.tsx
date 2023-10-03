import { Box, BoxProps, useTheme } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactElement | string | Array<React.ReactElement>;
  boxProps: BoxProps;
};

export const Card = ({ children, boxProps }: Props) => {
  const theme = useTheme();
  return (
    <Box
      borderRadius="16px"
      sx={{
        backgroundColor: theme.palette.common.white,
      }}
      {...boxProps}
    >
      {children}
    </Box>
  );
};
