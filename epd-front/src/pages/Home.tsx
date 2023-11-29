import { Box, Skeleton, Typography } from "@mui/material";
import { Card } from "../components/Card";
import { useGetEmailsQuery } from "../services/email";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const Home = () => {
  const { data, isLoading } = useGetEmailsQuery("1");

  const totalPhishing =
    data?.filter((email) => email.phishing === "yes").length || 0;
  const totalNotPhishing =
    data?.filter((email) => email.phishing === "no").length || 0;

  // map data and obtain phishing and not phishing count per day
  const phishingData = data?.reduce((acc, curr) => {
    const date = new Date(curr.date_created);
    const dateStr = `${date.getMonth() + 1}/${date.getDate()}`;
    const phishing = curr.phishing === "yes" ? 1 : 0;
    const notPhishing = curr.phishing === "no" ? 1 : 0;

    const existingData = acc.find((data: any) => data.date === dateStr);

    if (existingData) {
      existingData.phishing += phishing;
      existingData.notPhishing += notPhishing;
    } else {
      acc.push({
        date: dateStr,
        phishing,
        notPhishing,
      });
    }

    return acc;
  }, [] as any);

  return (
    <Box>
      <Card width="100%" padding="24px">
        <Box display="flex" justifyContent="space-evenly">
          <MetricElement isLoading={isLoading} value={totalPhishing} />
          <MetricElement isLoading={isLoading} value={totalNotPhishing} />
        </Box>
      </Card>
      <Card width="100%" padding="24px" mt={6}>
        <ResponsiveContainer height={300}>
          <LineChart data={phishingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="notPhishing" stroke="green" />
            <Legend />
            <Line type="monotone" dataKey="phishing" stroke="tomato" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Box>
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
        <Typography variant="h2" fontWeight="bold">
          {value}
        </Typography>
      )}
    </Box>
  );
};
