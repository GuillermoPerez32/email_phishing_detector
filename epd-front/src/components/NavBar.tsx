import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, InfoIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("green.100", "green.900")} px={4}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/">
            <Flex gap={4} alignItems={"center"}>
              <img src={logo} alt="site logo" width={40} height={40} />
              <Text fontSize={24} fontWeight={"bold"}>
                Phishing Detector
              </Text>
            </Flex>
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={4}>
              <IconButton
                variant="ghost"
                colorScheme="teal"
                aria-label="Change Theme"
                onClick={toggleColorMode}
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              />
              <IconButton
                variant="ghost"
                colorScheme="teal"
                aria-label="Help"
                icon={<InfoIcon />}
              />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
