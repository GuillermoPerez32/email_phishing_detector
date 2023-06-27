import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Tr, Td, CircularProgress } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setEmail } from "../../features/email/emailSlice";

interface TableRowProps {
  index: number;
  sender: string;
  dest: string;
  subject: string;
  status: string;
  date_created: Date;
  uuid: string;
}

const TableRow = ({
  index,
  sender,
  dest,
  subject,
  status,
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
      <Td>
        {status === "success" ? (
          <CheckIcon fontSize={15} color="green" />
        ) : status === "idle" ? (
          <CircularProgress isIndeterminate color="gray.300" size={10} />
        ) : (
          <CloseIcon fontSize={15} color="red" />
        )}
      </Td>
    </Tr>
  );
};

export default TableRow;
