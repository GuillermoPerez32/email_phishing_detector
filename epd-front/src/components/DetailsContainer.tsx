import { Box, CircularProgress, Text } from "@chakra-ui/react";
import { useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { useGetEmailByIdQuery } from "../services/email";

const DetailsContainer = () => {
  const emailId = useAppSelector((state) => state.emails.emailId);
  const { data, isLoading, refetch } = useGetEmailByIdQuery(emailId);

  useEffect(() => {
    refetch();
  }, [emailId]);

  return (
    <Box width="100%" height="100%" bg="gray.200" roundedLeft="md" padding={4}>
      <Text fontSize="2xl">
        {isLoading ? <CircularProgress isIndeterminate /> : data?.uuid}
      </Text>
    </Box>
  );
};

export default DetailsContainer;
