import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import TableRow from "./TableRow";
import { useGetEmailsQuery } from "../../services/email";

const EmailsTable = () => {
  const table = {
    header: ["No", "sender", "dest", "subject", "date created", "status"],
  };

  const { data } = useGetEmailsQuery("df");

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {table.header.map((name) => (
              <Th key={name}>{name}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map(({ date_created, uuid }, i) => (
            <TableRow
              key={i}
              index={i}
              sender={"sender"}
              dest={"dest"}
              subject={"subject"}
              status={"status"}
              date_created={date_created}
              uuid={uuid}
            />
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            {table.header.map((name) => (
              <Th key={name}>{name}</Th>
            ))}
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default EmailsTable;
