import { Box, Button, Typography } from "@mui/material";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import { Dashboard, Email } from "@mui/icons-material";

export const SideBar = () => {
  return (
    <Card
      height="90vh"
      paddingY={5}
      paddingX={4}
      display="flex"
      flexDirection="column"
    >
      <Box mb={5} display="flex" justifyContent="center">
        <img src="logo.png" alt="" width="30%" />
      </Box>
      <SideBarItem to="/" startIcon={<Dashboard />}>
        <Typography variant="h6">Dashboard</Typography>
      </SideBarItem>
      <SideBarItem to="emails" startIcon={<Email />}>
        <Typography variant="h6">Emails</Typography>
      </SideBarItem>
    </Card>
  );
};

type Props = {
  startIcon?: React.ReactNode;
  children?: React.ReactNode | React.ReactNode[] | string;
  to: string;
};

const SideBarItem = ({ startIcon, children, to }: Props) => {
  return (
    <Link to={to}>
      <Button startIcon={startIcon}>{children}</Button>
    </Link>
  );
};
