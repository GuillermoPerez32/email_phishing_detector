import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import {
    Tr,
    Td,
    CircularProgress,
} from '@chakra-ui/react'

interface TableRowProps {
    index:number,
    sender: string,
    dest: string,
    subject: string,
    status: string,
}

const TableRow = ({index, sender, dest, subject, status}:TableRowProps) => {
  return (
    <Tr
        bg='gray.100'
        userSelect="none"
          
        _hover={{
            bg: 'gray.300',
            cursor: 'pointer'
        }}  
        _active={{
            bg: 'gray.200',
        }}
    >
        <Td>{index}</Td>
        <Td>{sender}</Td>
        <Td>{dest}</Td>
        <Td>{subject}</Td>
        <Td>
            {
                status === "success"
                ? <CheckIcon fontSize={15} color="green"/>
                : status === "idle"
                ? <CircularProgress isIndeterminate color='gray.300' size={10}/>
                : <CloseIcon fontSize={15} color="red"/>
            }
    </Td>
    </Tr>
  )
}

export default TableRow