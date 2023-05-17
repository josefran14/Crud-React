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
  handleOpenModalDelete,
  darkStyle
}) => {
  return (
    <>
      <TableContainer sx={{ width: "100%" }}>
        <Table size="small" aria-label="a dense table">
          <TableHead sx={{ width: "80%" }}>
            <TableRow>
              <TableCell sx={darkStyle}>N#</TableCell>
              <TableCell sx={darkStyle}>Name</TableCell>
              <TableCell sx={darkStyle} align="center">Email</TableCell>
              <TableCell sx={darkStyle} align="right">Gender</TableCell>
              <TableCell sx={darkStyle} align="right">Username</TableCell>
              <TableCell sx={darkStyle} align="right">Website</TableCell>
              <TableCell sx={darkStyle} align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ width: "80%" }}>
            {users.map(
              ({ id, name, email, city, username, website }, index) => (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={darkStyle} component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell sx={darkStyle} component="th" scope="row">
                    {name}
                  </TableCell>
                  <TableCell sx={darkStyle} align="center">{email}</TableCell>
                  <TableCell sx={darkStyle} align="right">{city}</TableCell>
                  <TableCell sx={darkStyle} align="right">{username}</TableCell>
                  <TableCell sx={darkStyle} align="right">{website}</TableCell>
                  <TableCell sx={darkStyle} align="right">
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
