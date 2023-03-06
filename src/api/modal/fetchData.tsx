import axios from "axios"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovieData , setCurrentMovieData } from "~/features/home/redux/action";


export default function getMovies() {
  const dispatch = useDispatch()
  const fetchData = () => {

    const baseURL = "https://api.sampleapis.com/coffee/hot";
    axios.get(`${baseURL}`)
    .then(
      (response) => {
        // dispatch(setMovieData(response.data))
        // dispatch(setCurrentMovieData(response.data))
        console.log(response.data)
      }
    )
    .catch((err)=>console.log("hello",err))
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