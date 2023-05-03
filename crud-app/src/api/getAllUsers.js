import axios from "axios"

export const getAllUsers = async() => {
    const url = "https://fake-api-spartan.herokuapp.com/users"
    const {data} = await axios.get(url)

    return data
}