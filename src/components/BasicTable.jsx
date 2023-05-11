import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Data from "./Data";
import Editdata from "./Editdata";
import { NavLink } from "react-router-dom";

export default function BasicTable() {
  // for calculating age funnction
  function ageCalculator(date) {
    // var check ="17/01/1999";
    const newdate =
      date.substring(3, 5) +
      "/" +
      date.substring(0, 2) +
      "/" +
      date.substring(6, 10);
    const dob = new Date(newdate);
    //calculate month difference from current date in time
    const month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format
    const age_dt = new Date(month_diff);

    //extract year from date
    const year = age_dt.getUTCFullYear();

    //now calculate the age of the user
    const age = Math.abs(year - 1970);
    //display the calculated age
    return age;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">age</TableCell>
            <TableCell align="right">gender&nbsp;</TableCell>
            <TableCell align="right">email&nbsp;</TableCell>
            <TableCell align="right">edit&nbsp;</TableCell>
            <TableCell align="right">view&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell align="right">{ageCalculator(row.dob)}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
                <Editdata detail={row} />
              </TableCell>
              <TableCell align="right">
                <NavLink
                  to={{
                    pathname: `/persondetail/${row.id - 1}`,
                    state: { row },
                  }}
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  view detail
                </NavLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
