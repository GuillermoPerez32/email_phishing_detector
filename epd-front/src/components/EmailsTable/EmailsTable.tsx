import { DragEvent, useState } from "react";
import { Box, BoxProps } from "@mui/material";
import {
  useGetEmailsQuery,
  useUploadEmailMutation,
  // useUploadEmailMutation,
} from "../../services/email";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { uploadEmail } from "../../helpers/uploadEmail";
import moment from "moment";
import {
  Cancel,
  CancelOutlined,
  CheckCircleOutlineRounded,
  PendingOutlined,
  Phishing,
} from "@mui/icons-material";

const EmailsTable = ({ ...others }: BoxProps) => {
  const table = {
    header: ["from", "dest", "subject", "date", "phishing"],
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { data: rows } = useGetEmailsQuery("df");

  const [uploadEmail] = useUploadEmailMutation();

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = async (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);

    files.map(async (file) => {
      uploadEmail(file);
    });
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box {...others} sx={{ userSelect: "none" }}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {table.header.map((column) => (
                  <TableCell key={column} align="left">
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows !== undefined &&
                rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    const icon =
                      row.phishing === "yes" ? (
                        <Phishing sx={{ color: "red" }} />
                      ) : row.phishing === "no" ? (
                        <CheckCircleOutlineRounded sx={{ color: "green" }} />
                      ) : row.phishing === "error" ? (
                        <CancelOutlined sx={{ color: "green" }} />
                      ) : (
                        <PendingOutlined sx={{ color: "yellow" }} />
                      );
                    return (
                      <TableRow
                        key={row.uuid}
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell align="left">
                          {row.data["mail_headers"]["From"]}
                        </TableCell>
                        <TableCell align="left">
                          {row.data["mail_headers"]["To"]}
                        </TableCell>
                        <TableCell align="left">
                          {row.data["mail_headers"]["Subject"].length > 100
                            ? row.data["mail_headers"]["Subject"].slice(100) +
                              "..."
                            : row.data["mail_headers"]["Subject"]}
                        </TableCell>
                        <TableCell align="left">
                          {moment(row.date_created).format("LLLL")}
                        </TableCell>
                        <TableCell align="center">
                          <Box display="flex" alignItems="center">
                            <Box>{icon}</Box>
                            <Box>{row.phishing}</Box>
                          </Box>
                        </TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows?.length ? rows?.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default EmailsTable;
