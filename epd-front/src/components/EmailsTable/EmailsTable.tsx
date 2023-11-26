import React, { useState, useEffect } from "react";
import { Box, BoxProps } from "@mui/material";
import {
  useDeleteEmailMutation,
  useGetEmailsQuery,
} from "../../services/email";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import moment from "moment";
import {
  CancelOutlined,
  CheckCircleOutlineRounded,
  PendingOutlined,
  Phishing,
} from "@mui/icons-material";
import { Email } from "../../types/email";
import { useAppStore } from "../../services/filter";
import EmailPreview from "../EmailPreview";

const EmailsTable = ({ ...others }: BoxProps) => {
  const table = {
    header: ["FROM", "DEST", "SUBJECT", "DATE", "PHISHING"],
  };

  const [selectedRow, setSelectedRow] = useState<Email | undefined>();

  const [showPreview, setshowPreview] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const [deleteEmail] = useDeleteEmailMutation();

  const { data } = useGetEmailsQuery("df");

  const filter = useAppStore((state) => state.filter);

  useEffect(() => {
    setPage(0);
  }, [filter]);

  const rows = data?.filter((email) => {
    const filterData = ["From", "To", "Subject"];
    let match = false;
    filterData.forEach((filterParam) => {
      if (
        (email.data["mail_headers"][filterParam] as String)
          ?.toLowerCase()
          .includes(filter.toLowerCase())
      )
        match = true;
    });
    if (email.phishing.includes(filter)) match = true;
    return match;
  });

  const handleRowClick = (event: any, row: Email) => {
    event.preventDefault(); // Prevent the default context menu
    setSelectedRow(row);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEmailDelete = () => {
    deleteEmail(selectedRow?.uuid);
  };

  useEffect(() => {
    if (selectedRow !== undefined) {
      setshowPreview(true);
    }
  }, [selectedRow]);

  const handleExitPreview = () => {
    setSelectedRow(undefined);
    setshowPreview(false);
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
                  .map((row: Email) => {
                    const icon =
                      row.phishing === "yes" ? (
                        <Phishing sx={{ color: "red" }} />
                      ) : row.phishing === "no" ? (
                        <CheckCircleOutlineRounded sx={{ color: "green" }} />
                      ) : row.phishing === "error" ? (
                        <CancelOutlined sx={{ color: "tomato" }} />
                      ) : (
                        <PendingOutlined sx={{ color: "yellow" }} />
                      );
                    return (
                      <TableRow
                        onClick={(e) => handleRowClick(e, row)}
                        selected={selectedRow === row}
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
                          {row.data["mail_headers"]["Subject"]?.length > 100
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
          rowsPerPageOptions={[25, 50, 100]}
          component="div"
          count={rows?.length ? rows?.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <EmailPreview
        subject={selectedRow?.data["mail_headers"]["Subject"]}
        body={selectedRow?.data["mail_body"]}
        open={showPreview}
        onClose={handleExitPreview}
        onDelete={handleEmailDelete}
      ></EmailPreview>
    </Box>
  );
};

export default EmailsTable;
