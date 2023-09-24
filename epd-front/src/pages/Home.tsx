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
      <Button>
        <Link to="emails">Emails</Link>
      </Button>
      <Button>
        <Link to="metrics">Metrics</Link>
      </Button>
    </Flex>
  );
};
