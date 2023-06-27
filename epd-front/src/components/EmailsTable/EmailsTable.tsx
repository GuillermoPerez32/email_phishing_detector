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
import {
  useGetEmailsQuery,
  // useUploadEmailMutation,
} from "../../services/email";
import { uploadEmail } from "../../helpers/uploadEmail";

const EmailsTable = () => {
  const table = {
    header: ["No", "sender", "dest", "subject", "date created", "phishing"],
  };

  const { data } = useGetEmailsQuery("df");
  // const [uploadEmail, { isLoading, isError, isSuccess }] =
  //   useUploadEmailMutation();

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    // Aquí puedes realizar acciones con los archivos soltados
    files.map(async (file) => {
      // uploadEmail(file);

      uploadEmail(file);
    });

    console.log(files);
  };

  return (
    <TableContainer onDragOver={handleDragOver} onDrop={handleDrop}>
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
