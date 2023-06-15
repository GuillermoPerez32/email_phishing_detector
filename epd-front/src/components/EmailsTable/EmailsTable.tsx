import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    TableContainer,
} from '@chakra-ui/react'
import TableRow from './TableRow'

const EmailsTable = () => {

    const table = {

        header: ["No", "sender", "dest", "subject", "status"],
        body: [
            {
                sender: "Guille",
                dest: "Guille",
                subject: "Hola",
                status: "success",
            },
            {
                sender: "Jorge",
                dest: "Guille",
                subject: "Hola",
                status: "failed",
            },
            {
                sender: "Guille",
                dest: "Jorge",
                subject: "Hola",
                status: "idle",
            },
        ]
    }

  return (
    <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        {table.header.map(name => (
            <Th>{name}</Th>
        )) }
      </Tr>
    </Thead>
    <Tbody>
          {table.body.map(({ sender, dest, subject, status }, i) => (
            <TableRow index={i} sender={sender} dest={dest} subject={subject} status={status} />
        ))}
    </Tbody>
    <Tfoot>
      <Tr>
      {table.header.map(name => (
            <Th>{name}</Th>
        )) }
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
  )
}

export default EmailsTable