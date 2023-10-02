import { Box, Flex } from "@chakra-ui/react";
import EmailsTable from "../components/EmailsTable/EmailsTable";
import DetailsContainer from "../components/DetailsContainer";
import { Options } from "../components/Options";
import { useAppSelector } from "../app/hooks";

const EmailPhishing = () => {
  const emailId = useAppSelector((state) => state.emails.emailId);

  return (
    <Flex gap={50} width="100%" height="100%">
      <Box w="65%" padding="1em" display="flex" flexDirection="column">
        <Options />
        <EmailsTable />
      </Box>
      <Box w="35%">
        <Box
          width="100%"
          height="100%"
          bg="gray.200"
          roundedLeft="md"
          padding={4}
        >
          {emailId && <DetailsContainer />}
        </Box>
      </Box>
    </Flex>
  );
};

export { EmailPhishing };
