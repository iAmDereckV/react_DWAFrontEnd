import React from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Person } from "../PersonModel";
import DeleteIcon from "@mui/icons-material/Delete";

interface PersonTableProp {
  data: Person[];
  deletePersons: (id: number) => void;
}
const PersonTable = ({ data, deletePersons }: PersonTableProp) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.id}
              </TableCell>

              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="center">
                <Button
                  // autoFocus
                  onClick={() => {
                    deletePersons(row.id);
                  }}
                >
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PersonTable;
