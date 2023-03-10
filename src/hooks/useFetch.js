// export const characters = () =>{
//     fetch("https://rickandmortyapi.com/api/character")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// } 


// export const characters = async() =>{
//     const url = "https://rickandmortyapi.com/api/character"
//     const resp = await fetch(url)
//     const {results} = await resp.json()

//     // console.log(results)

//     return results
// }


import { useEffect, useState } from "react"
import axios from "axios"



export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true
    })
  
  const getFetch = async() =>{

     await axios.get(url)
     .then(response=>{
       setState({
         data: response.data,
         isLoading: false
       })
     })

  }

  useEffect(() =>{
    getFetch()
  },[url])
  
  return {
    data: state.data,
    isLoading: state.isLoading
  }
}
