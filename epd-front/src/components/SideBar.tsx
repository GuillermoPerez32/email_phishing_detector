import { Box, Button } from "@mui/material";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import { Dashboard, Email, QueryStats } from "@mui/icons-material";

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
        Dashboard
      </SideBarItem>
      <SideBarItem to="emails" startIcon={<Email />}>
        Emails
      </SideBarItem>
      <SideBarItem to="metrics" startIcon={<QueryStats />}>
        Metrics
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
