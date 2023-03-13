import axios from "axios";
import { useDispatch } from "react-redux";
import { setAvailShow } from "./action";

const getAvailableShow = (mId: any,date: any,dispatch:any) => {
    const baseURL = "http://10.0.2.2:8080";
    axios.get(`${baseURL}/show/${mId}/${date}`)
    .then(
        (response) => {
            let Data = response.data;
            dispatch(setAvailShow(Data))
        }
    )
}
const setSeatStatusURL = (mId:string,tId:string,date:string,time:string,seats:string) => {
    const baseURL = "http://10.0.2.2:8080";
    mId = mId.trim()
    tId = tId.trim()
    date = date.trim()
    time = time.trim()
    seats = seats.trim()
    axios({
        method: 'post',
        url: baseURL + '/seats/' + mId + '/' + tId + '/' + date + '/' + time,
        data: {
            seats: seats
        },
    }).then((response)=>console.log("posted",response.data))
    .catch((err)=>console.log("err: ",seats,err))
}

export {getAvailableShow,setSeatStatusURL};