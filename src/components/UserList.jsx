import { Visibility } from "@mui/icons-material";
import { Box, Button, Modal, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import { FormAdd } from "./FormAdd";
//import { Modal } from "./Modal";


export const UserList = ({ users, setModal, modal, uniqueData, setUniqueData, open, setOpen}) => {

  const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      pt: 2,
      px: 4,
      pb: 3,
    };

    const [openModal, setOpenModal] = useState(false);
  
   const searchById = (id) =>{
     //console.log("Ojito", id)
     let result = users.find((user) => user.id === id)
      setUniqueData(result)
      setOpen(true)
      console.log('filter', result)
      console.log("unique", uniqueData)
    }
    
    const handleEdit = (id) =>{
      searchById(id)
    console.log("Edit", id)
    setOpenModal(true)
   }

   const handleDelete = (id) =>{
    console.log("Delete", id);
   }

  return (
    <>
      {users.map(({ name, id, lastName, gender, email }) => (
        <TableRow key={id}>
          <TableCell>
            {/* <UserItem name={name}/> */}
            {id}
          </TableCell>

          <TableCell>
            {/* <UserItem name={name}/> */}
            {name}
          </TableCell>

          <TableCell>
            {/* <UserItem name={name}/> */}
            {lastName}
          </TableCell>

          <TableCell>
            {/* <UserItem name={name}/> */}
            {gender}
          </TableCell>

          <TableCell>
            {/* <UserItem name={name}/> */}
            {email}
          </TableCell>

          <TableCell>
            {/* <UserItem name={name}/> */}
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Button onClick={() => handleEdit(id)} variant="contained" sx={{ margin: "10px" }}>
                Edit
              </Button>

              <Button
               onClick={() => searchById(id)}
               open={open}
                variant="contained"
                sx={{ bgcolor: "aqua", margin: "10px" }}
              >
                <Visibility />
                

              </Button>

              <Button onClick={ () => handleDelete(id)} variant="contained" color="error" sx={{ margin: "10px" }}>
                Delete
              </Button>

            </Box>
          </TableCell>
        </TableRow>
      ))}
  
      <Modal
        open={openModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <FormAdd users={users} openMOdal={openModal} setOpenModal={setOpenModal} uniqueData={uniqueData}/>
        </Box>
      </Modal>
    </>
  );
};

