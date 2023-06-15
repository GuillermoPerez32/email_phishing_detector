import { Box, Flex } from "@chakra-ui/react"
import EmailsTable from "./EmailsTable/EmailsTable"
import DetailsContainer from "./DetailsContainer"

const Body = () => {
  return (
    <Flex gap={50} width="100%" height="100%">
      <Box w="65%" padding="1em">
        <EmailsTable />
      </Box>  
      <Box w="35%">
        <DetailsContainer />
      </Box>  
    </Flex>
  )
}

export default Body