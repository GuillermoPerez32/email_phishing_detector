import { useAppSelector } from "../app/hooks";

const EmailPhishing = () => {
  const emailId = useAppSelector((state) => state.emails.emailId);

  return <h1>email phishing page</h1>;
};

export { EmailPhishing };
