// import { useAppSelector } from "../app/hooks";
import { Typography } from "@mui/material";
import { Card } from "../components/Card";
import EmailsTable from "../components/EmailsTable/EmailsTable.1";

const EmailPhishing = () => {
  // const emailId = useAppSelector((state) => state.emails.emailId);

  return (
    <Card width="100%" height="70%" padding="24px">
      <Typography>Emails</Typography>
      <EmailsTable />
    </Card>
  );
};

export { EmailPhishing };
