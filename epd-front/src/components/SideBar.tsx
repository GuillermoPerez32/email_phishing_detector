import { Button } from "@mui/material";
import { Card } from "./Card";

export const SideBar = () => {
  return (
    <Card
      boxProps={{
        height: "90vh",
      }}
    >
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Card>
  );
};
