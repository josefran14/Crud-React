import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const userDefault = {
    id: "",
    name: "",
    lastname: "",
    gender: "",
    email: "",
}

export const FormAdd = ({users, openModal, setOpenModal, uniqueData}) => {

    const [user, setUser] = useState(userDefault)

    const [data, setData] = useState(users)

    // const [nameUser, setNameUser] = useState("")

    // const [lastname, setLastName] = useState("")

    // const [gender, setGender] = useState("")

    // const [email, setEmail] = useState("")

    // const onInputName = (event) =>{
    //     setNameUser(event.target.value)
    // }

    // const onInputLastName = (event) =>{
    //     setLastName(event.target.value)
    // }

    // const onInputGender = (event) =>{
    //     setGender(event.target.value)
    // }

    // const onInputEmail = (event) =>{
    //     setEmail(event.target.value)
    // }

    const handleChange = (event) =>{
        console.log(event);
        const {name, value} = event.target
        console.log(value)
        setUser(prev => ({
            ...prev,
            [name] : value
        }))
    }
    console.log("user", user);

   const editar = () =>{
      let dataNueva = data
      dataNueva.map((item) =>{
       if(item.id === user.id){
        item.name = user.name
        item.lastName = user.lastname
        item.gender = user.gender
        item.email = user.email
       }
    })
    setData(dataNueva)
    setOpenModal(false)
    console.log("Editar");
   }

     const onSubmit = (uniqueData) =>{
//     //  fetch.post("http://localhost:5000/usuarios", uniqueData)
     console.log("agregar", uniqueData)
    }

  return (
    <>
       <form>
        <Stack spacing="20px" sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            margin: "10px"
        }}>
        <TextField type="text" placeholder="Name" value={uniqueData?.name} name="name" onChange={ handleChange}/>
        <TextField type="text" placeholder="Lastname" value={uniqueData?.lastName} name="lastName" onChange={handleChange}/>
        <TextField type="text" placeholder="Gender" value={uniqueData?.gender} name="gender" onChange={handleChange}/>
        <TextField type="email" placeholder="Email" value={uniqueData?.email} name="email" onChange={handleChange}/>
        <Button variant="contained" onClick={() => console.log("Enviar")}>Update</Button>
        <Button variant="text" sx={{bgcolor: "red", color: "black"}}>Cancel</Button>
        </Stack>
       </form>
    </>
  )
}
