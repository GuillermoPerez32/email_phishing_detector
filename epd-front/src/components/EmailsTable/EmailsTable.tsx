// import {
//   Table,
//   Thead,
//   Tbody,
//   Tfoot,
//   Tr,
//   Th,
//   TableContainer,
// } from "@mui/material";
// import TableRow from "./TableRow";
// import {
//   useGetEmailsQuery,
//   useUploadEmailMutation,
//   // useUploadEmailMutation,
// } from "../../services/email";
// // import { uploadEmail } from "../../helpers/uploadEmail";

// const EmailsTable = () => {
//   const table = {
//     header: [
//       "No",
//       "sender",
//       "dest",
//       "subject",
//       "date created",
//       "phishing",
//       "Delete",
//     ],
//   };

//   const { data } = useGetEmailsQuery("df");
//   const [uploadEmail] = useUploadEmailMutation();

//   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//   };

//   const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     const files = Array.from(event.dataTransfer.files);

//     files.map(async (file) => {
//       uploadEmail(file);
//     });
//   };

//   return (
//     <TableContainer onDragOver={handleDragOver} onDrop={handleDrop}>
//       <Table variant="simple">
//         <Thead>
//           <Tr>
//             {table.header.map((name) => (
//               <Th key={name}>{name}</Th>
//             ))}
//           </Tr>
//         </Thead>
//         <Tbody height={100}>
//           {data?.map(({ date_created, uuid }, i) => (
//             <TableRow
//               key={i}
//               index={i}
//               sender={"sender"}
//               dest={"dest"}
//               subject={"subject"}
//               date_created={date_created}
//               uuid={uuid}
//             />
//           ))}
//         </Tbody>
//         <Tfoot>
//           <Tr>
//             {table.header.map((name) => (
//               <Th key={name}>{name}</Th>
//             ))}
//           </Tr>
//         </Tfoot>
//       </Table>
//     </TableContainer>
//   );
// };

// export default EmailsTable;
