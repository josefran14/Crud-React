import { Box, Button } from "@mui/material"

export const OptionsButtons = ({id, handleDelete}) => {
  return (
    <Box sx={{display: "flex", width: "100%", gap: "10px", justifyContent: "center"}}>
      <Button onClick={() => handleDelete(id)} sx={{width: "20%"}} variant="contained" color="error">Delete</Button>
      <Button sx={{width: "20%"}} variant="contained" color="warning">Update</Button>
      <Button sx={{width: "20%"}} variant="contained" color="primary">View</Button>
    </Box>
  )
}
