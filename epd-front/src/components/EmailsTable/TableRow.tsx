import { Tr, Td, IconButton } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setEmail } from "../../features/email/emailSlice";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDeleteEmailMutation } from "../../services/email";

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
  const [deleteEmail] = useDeleteEmailMutation();

  const handleClick = () => {
    dispatch(setEmail(uuid));
  };

  const handleDelete = () => {
    deleteEmail(uuid);
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
      <Td>
        <IconButton
          colorScheme="red"
          icon={<DeleteIcon />}
          aria-label={"Delete Email Button"}
          onClick={handleDelete}
        />
      </Td>
    </Tr>
  );
};

export default TableRow;
