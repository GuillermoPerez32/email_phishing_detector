import { Tr, Td } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setEmail } from "../../features/email/emailSlice";

interface TableRowProps {
  index: number;
  sender: string;
  dest: string;
  subject: string;
  date_created: Date;
  uuid: string;
}

const TableRow = ({
  index,
  sender,
  dest,
  subject,
  date_created,
  uuid,
}: TableRowProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setEmail(uuid));
  };

  return (
    <Tr
      bg="gray.100"
      userSelect="none"
      _hover={{
        bg: "gray.300",
        cursor: "pointer",
      }}
      _active={{
        bg: "gray.200",
      }}
      onClick={handleClick}
    >
      <Td>{index}</Td>
      <Td>{sender}</Td>
      <Td>{dest}</Td>
      <Td>{subject}</Td>
      <Td>{date_created.toString().split("T")[0]}</Td>
      <Td>Yes</Td>
    </Tr>
  );
};

export default TableRow;
