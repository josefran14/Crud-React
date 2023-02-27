import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const userDefault = {
    id: uuidv4(),
    name: "",
    lastname: "",
    gender: "",
    email: "",
}

export const FormAdd = ({users}) => {

    const [user, setUser] = useState(userDefault)

    const [data, setData] = useState(users)

    const [nameUser, setNameUser] = useState("")

    const [lastname, setLastName] = useState("")

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

    const onSubmit = () =>{
        setUser({
            ...user,
            name: nameUser,
            lastname: lastname,
            gender: gender,
            email: email
    })
     setData([...data, user])
     console.log('data', data);
    }
    
    console.log("user", user)

  return (
    <>
       <form>
        <Stack spacing="20px" sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            margin: "10px"
        }}>
        <TextField type="text" label="Name" placeholder="Nombre" onChange={onInputName}/>
        <TextField type="text" label="lastname" placeholder="Apellido" onChange={onInputLastName}/>
        <TextField type="text" label="Gender" placeholder="Genero" onChange={onInputGender}/>
        <TextField type="email" label="Email" placeholder="Correo" onChange={onInputEmail}/>
        <Button onClick={onSubmit} variant="contained">Enviar</Button>
        </Stack>
       </form>
    </>
  )
}
