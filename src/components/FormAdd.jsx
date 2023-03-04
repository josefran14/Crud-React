import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import CancelIcon from '@mui/icons-material/Cancel';

const userDefault = {
    id: "",
    name: "",
    lastname: "",
    gender: "",
    email: "",
}

export const FormAdd = ({users, open, setOpen, uniqueData}) => {

  // const handleChange = (event) =>{
  //     console.log(event);
  //     const {name, value} = event.target
  //     console.log(value)
  //     setUser(prev => ({
  //         ...prev,
  //         [name] : value
  //     }))

    const [user, setUser] = useState(userDefault)

    const [data, setData] = useState(users)

    const [nameUser, setNameUser] = useState("")

    const [lastName, setLastName] = useState("")

    const [gender, setGender] = useState("")

    const [email, setEmail] = useState("")

    const onInputName = (event) =>{
        setNameUser(event.target.value)
    }

    const onInputLastName = (event) =>{
        setLastName(event.target.value)
    }

    const onInputGender = (event) =>{
        setGender(event.target.value)
    }

    const onInputEmail = (event) =>{
        setEmail(event.target.value)
    }

    // }

   const editar = () =>{
      let dataNueva = data
      dataNueva.map((item) =>{
       if(item.id === user.id){
        item.name = user.name
        item.lastName = user.lastName
        item.gender = user.gender
        item.email = user.email
       }
    })
    setData(dataNueva)
    console.log("Editar");
  }
  
  const onSubmit = () =>{
    let newUser = {
      id: uuidv4(),
      name: nameUser,
      lastName: lastName,
      gender: gender,
      email: email
    }
    //setUser(obj)
    axios.post("http://localhost:5000/usuarios", newUser)
    setOpen(false)
    }

    // useEffect(() =>{
    //  return newUser
    // }, [data])

  return (
    <>
       <form>
        <Stack spacing="20px" sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            margin: "10px"
        }}>
        <Box sx={{display: "flex", justifyContent: "right", alignItems: "center", width: "100%"}}>
          <Typography sx={{width: "97%", marginLeft: "50px", textAlign: "center"}}>Form</Typography>
        <Button onClick={() => setOpen(false)} sx={{width: "3%"}}><CancelIcon sx={{color: "red"}}/></Button> 
          </Box>
        <TextField type="text" placeholder="Name" value={uniqueData?.name} name="name" onChange={onInputName}/>
        <TextField type="text" placeholder="Lastname" value={uniqueData?.lastName} name="lastName" onChange={onInputLastName}/>
        <TextField type="text" placeholder="Gender" value={uniqueData?.gender} name="gender" onChange={onInputGender}/>
        <TextField type="email" placeholder="Email" value={uniqueData?.email} name="email" onChange={onInputEmail}/>
        <Button variant="contained" onClick={() => onSubmit(uniqueData, false)}>Agregar</Button>
        </Stack>
       </form>
    </>
  )
}
