import { Box, BoxProps, useTheme } from "@mui/material";
import React from "react";

type Props = BoxProps & {
  children: React.ReactElement | string | Array<React.ReactElement>;
};

export const Card = ({ children, ...others }: Props) => {
  const theme = useTheme();
  return (
    <Box
      borderRadius={3}
      sx={{
        backgroundColor: theme.palette.common.white,
      }}
      {...others}
    >
      {children}
    </Box>
  );
};
