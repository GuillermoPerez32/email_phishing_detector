import { Button } from "@mui/material";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import { Dashboard } from "@mui/icons-material";

export const SideBar = () => {
  return (
    <Card
      boxProps={{
        height: "90vh",
      }}
    >
      <SideBarItem to="/" startIcon={<Dashboard />}>
        Dashboard
      </SideBarItem>
      <SideBarItem to="emails" startIcon={<Dashboard />}>
        Emails
      </SideBarItem>
      <SideBarItem to="metrics" startIcon={<Dashboard />}>
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
