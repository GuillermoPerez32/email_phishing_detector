import { Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction="column"
      gap={12}
      height="100%"
    >
      <Link to="emails">
        <Button paddingX={16} paddingY={8}>
          Emails
        </Button>
      </Link>
      <Link to="metrics">
        <Button paddingX={16} paddingY={8}>
          Metrics
        </Button>
      </Link>
    </Flex>
  );
};
