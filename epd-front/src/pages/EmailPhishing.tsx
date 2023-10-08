// import { useAppSelector } from "../app/hooks";
import { Card } from "../components/Card";
import EmailsTable from "../components/EmailsTable/EmailsTable";

const EmailPhishing = () => {
  // const emailId = useAppSelector((state) => state.emails.emailId);

  return (
    <Card width="100%" height="70%" padding="24px">
      <EmailsTable />
    </Card>
  );
};

export { EmailPhishing };
