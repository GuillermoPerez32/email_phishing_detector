import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box
      bg={useColorModeValue("green.100", "green.900")}
      color={useColorModeValue("green.700", "green.200")}
    >
      <Text pt={6} fontSize={"sm"} textAlign={"center"}>
        © 2023 Guillermo Perez, Jorge Sotolongo. All rights reserved.
      </Text>
    </Box>
  );
}
