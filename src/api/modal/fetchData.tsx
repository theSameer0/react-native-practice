import axios from "axios"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovieData , setCurrentMovieData } from "~/features/home/redux/action";


export default function getMovies() {
  const dispatch = useDispatch()
  const fetchData = () => {
    // console.log("reaced")
    const config = {
      headers:{
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Headers': '*',
      }
    };
    const baseURL = "http://192.168.119.45:8080";
    const baseURL2 = "http://192.168.0.119:8080";
    axios.get(`${baseURL}/movies`)
    .then(
      (response) => {
        // console.log("hey")
        dispatch(setMovieData(response.data))
        dispatch(setCurrentMovieData(response.data))
        // console.log(response.data)
      }
    )
    .catch((err)=>{
      // console.log("error")
      console.log("helloError: ",err )
    })
  };
  // fetchTheatre()
  // console.log("runeed")
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