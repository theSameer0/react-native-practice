import { useDispatch , useSelector } from "react-redux";
import { setExtraDetail } from "~/features/home/redux/action";
const GET_MOVIE_URL = 'https://reactnative.dev/movies.json'
const dispatch = useDispatch()
export default async function getMovies () {
    try {
        const response = await fetch(GET_MOVIE_URL);
        const json = await response.json();
        dispatch(setExtraDetail(json.movies))
        const extraDetail = useSelector((state:any)=>state.langReducer.checkExtra)
        console.log(extraDetail)
    } catch (error) {
      console.error(error);
    } finally {
      console.log(false);
    }
  };