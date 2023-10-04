// import { useAppSelector } from "../app/hooks";
import { Typography } from "@mui/material";
import { Card } from "../components/Card";

const EmailPhishing = () => {
  // const emailId = useAppSelector((state) => state.emails.emailId);

  return (
    <Card width="100%" height="90%" padding="24px">
      <Typography>Emails</Typography>
    </Card>
  );
};

export { EmailPhishing };
