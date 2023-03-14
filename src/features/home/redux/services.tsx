import { Image, MovieData , TheatreData } from "./interface";
import { useDispatch } from "react-redux";
import { setMovieData , setTheatreData  } from "./action";
import axios from "axios";
import { useEffect } from "react";

function InitialCall() {
    useEffect(() => {
      fetchData()
      fetchTheatre()
    }, [])
    
    const dispatch = useDispatch()

    // const baseURL = "http://192.168.0.119:8080";
    const baseURL = "http://10.0.2.2:8080"
    // const baseURL = "http://192.168.119.45:8080"
    const fetchData = () => {
        console.log("entered")
        var MovieDataList : MovieData[] = []
        axios.get(`${baseURL}/movies`)
        .then((response) => {
            var Data = response.data;
            dispatch(setMovieData(Data))
            // console.log(Data)
        })
        .catch((err)=>console.log(err))
    };
    const fetchTheatre = () => {
        var TheatreDataList: TheatreData[] = []
        axios.get(`${baseURL}/theatres`)
        .then((response)=>{
            var Theatre = response.data;
            dispatch(setTheatreData(Theatre))
            // console.log("fetch",Theatre)
        })
        .catch((err)=>console.log(err))
    }
    const fetchDataLang = () => {
        
    }
}
export default InitialCall;