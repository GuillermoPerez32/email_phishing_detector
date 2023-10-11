import { Box, MenuItem as MUIMenuItem } from "@mui/material";
type Props = {
  onClick: any;
  children: React.ReactNode;
};

export const MenuItem = ({ onClick, children }: Props) => {
  return (
    <MUIMenuItem onClick={onClick}>
      <Box display="flex" alignItems="center" gap={2}>
        {children}
      </Box>
    </MUIMenuItem>
  );
};
