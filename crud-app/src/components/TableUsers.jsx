import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { OptionsButtons } from "./OptionsButtons";

export const TableUsers = ({
  users,
  handleDelete,
  getUsersDetails,
  handleUpdate,
  handleOpenModalDelete
}) => {
  return (
    <>
      <TableContainer sx={{ width: "100%" }}>
        <Table size="small" aria-label="a dense table">
          <TableHead sx={{ width: "80%" }}>
            <TableRow>
              <TableCell>N#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Website</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ width: "80%" }}>
            {users.map(
              ({ id, name, email, city, username, website }, index) => (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {name}
                  </TableCell>
                  <TableCell align="center">{email}</TableCell>
                  <TableCell align="right">{city}</TableCell>
                  <TableCell align="right">{username}</TableCell>
                  <TableCell align="right">{website}</TableCell>
                  <TableCell align="right">
                    <OptionsButtons
                      id={id}
                      handleDelete={handleDelete}
                      getUsersDetails={getUsersDetails}
                      handleUpdate={handleUpdate}
                      handleOpenModalDelete={handleOpenModalDelete}
                    />
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
