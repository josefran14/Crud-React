import { useEffect, useState } from "react";
import { getAllUsers } from "../api/getAllUsers";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

let defaultUser = {id:null, name:"", email:"",email:"",username:"",website:""}

export const useUsers = () => {

    const [open, setOpen] = useState(false);

    const [openModalView, setOpenModalView] = useState(false);

    const [newUser, setNewUser] = useState(defaultUser);

    const [specificUser, setSpecificUser] = useState({})

    const [users, setUsers] = useState([]);

    const [updateUser, setUpdateUser] = useState(null)

    const getUsers = async () => {
        const allUsers = await getAllUsers();
        setUsers(allUsers);
    };

    useEffect(() => {
        getUsers();
    }, [users]);
    
    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false);
        setNewUser(defaultUser)
    };

    const handleOpenModalView = () => {
        setOpenModalView(true);
      };

    const handleCloseModalView = () => {
        setOpenModalView(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewUser({
            ...newUser,
            [name]: value,
        });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setNewUser({...newUser, id: uuidv4()})
        const url = "https://fake-api-spartan.herokuapp.com/users"
        axios.post(url, newUser)
        handleClose()
        setNewUser(defaultUser)
    };
    
    const handleDelete = (id) =>{
        axios.delete(`https://fake-api-spartan.herokuapp.com/users/${id}`)
    }
    
    const handleUpdate = (id) =>{
        let usuario = users.find((user) => user.id === id)
        setNewUser(usuario)
        setUpdateUser(id)
        handleOpen()
    }

    const handleAddUpdate = (id) =>{
        axios.put(`https://fake-api-spartan.herokuapp.com/users/${id}`, newUser)
        handleClose()
        setNewUser(defaultUser)
    }

    const getUsersDetails = async(id) =>{
        const url = `https://fake-api-spartan.herokuapp.com/users/${id}`
        let {data} = await axios.get(url)
        setSpecificUser(data)
        handleOpenModalView() 
    }

    useEffect(() => {
      getUsersDetails()
    }, [specificUser])
    

    return{
        handleChange,
        handleSubmit,
        open,
        handleClose,
        handleOpen,
        newUser,
        handleDelete,
        openModalView,
        handleOpenModalView,
        handleCloseModalView,
        getUsersDetails,
        users,
        specificUser,
        handleUpdate,
        newUser,
        updateUser,
        handleAddUpdate
    } 
};