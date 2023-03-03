import axios from "axios"
import { useEffect } from "react";

const GET_MOVIE_URL = 'http://localhost:9090'
const config = {
  headers: {
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Credentials": true,
  }
}

export default function getMovies() {
  const fetchData = () => {
    const baseURL = "https://api.sampleapis.com/coffee";
    axios.get(`${GET_MOVIE_URL}/movies`, config)
    .then(
      (response) => console.log(response.data)
    )
    .catch((err)=>console.log(err))
  };
  fetchData()
}




// export default async function getMovies () {
//   fetch(GET_MOVIE_URL)
//   .then(
//     response => response.json()
//   )
//   .then(
//     data => console.log(data)
//   )
//   .catch((err)=>{
//     console.log(err)
//   })
// };