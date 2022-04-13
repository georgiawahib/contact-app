import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";

import { useEffect, useState } from "react";
import axios from "axios";
import IndividualModal from "./IndividualModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ffffff",
    fontFamily: "Plus Jakarta Sans",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#666666",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ContactTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState({});
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setAllUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <>
          <TableContainer component={Paper} sx={{ maxHeight: "75vh" }}>
            <Table stickyHeader aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell style={{ width: 200 }}>NAME</StyledTableCell>
                  <StyledTableCell align="left">USERNAME</StyledTableCell>
                  <StyledTableCell align="right">PHONE</StyledTableCell>
                  <StyledTableCell align="right">EMAIL</StyledTableCell>
                  <StyledTableCell align="right">COMPANY</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <StyledTableRow
                      key={row.name}
                      onClick={() => {
                        setSelectedUser(row);
                        setOpen(!open);
                      }}
                    >
                      <StyledTableCell
                        component="th"
                        style={{ color: "black" }}
                        scope="row"
                      >
                        <b>{row.name}</b>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        @{row.username}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.phone}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.email}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.company.name}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={allUsers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          {open && (
            <IndividualModal
              open={open}
              setOpen={setOpen}
              user={selectedUser}
            />
          )}
        </>
      )}
    </>
  );
}
