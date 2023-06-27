import { Box, Text } from "@chakra-ui/react";
import { useAppSelector } from "../app/hooks";
import { useEffect } from "react";

const DetailsContainer = () => {
  const emailId = useAppSelector((state) => state.emails.emailId);

  useEffect(() => {
    console.log("cambiado" + emailId);
  }, [emailId]);

  return (
    <Box width="100%" height="100%" bg="gray.200" roundedLeft="md" padding={4}>
      <Text fontSize="2xl">Details</Text>
    </Box>
  );
};

export default DetailsContainer;
