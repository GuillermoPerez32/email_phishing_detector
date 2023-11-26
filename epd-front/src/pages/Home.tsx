import { Box, Skeleton, Typography } from "@mui/material";
import { Card } from "../components/Card";
import { useGetEmailsQuery } from "../services/email";

export const Home = () => {
  const { data, isLoading } = useGetEmailsQuery("1");

  const totalPhishing =
    data?.filter((email) => email.phishing === "yes").length || 0;
  const totalNotPhishing =
    data?.filter((email) => email.phishing === "no").length || 0;

  return (
    <Card width="100%" height="70%" padding="24px">
      <Box display="flex" justifyContent="space-evenly">
        <MetricElement isLoading={isLoading} value={totalPhishing} />
        <MetricElement isLoading={isLoading} value={totalNotPhishing} />
      </Box>
    </Card>
  );
};

export const MetricElement = ({
  isLoading,
  value,
}: {
  isLoading: boolean;
  value: number;
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6">Total Not phishing</Typography>
      {isLoading ? (
        <Skeleton variant="text" />
      ) : (
        <Typography variant="h4">{value}</Typography>
      )}
    </Box>
  );
};
