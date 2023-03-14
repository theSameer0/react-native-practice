import axios from "axios";
import { useDispatch } from "react-redux";
import { setAvailShow, setSeatStatus } from "./action";
import { Seat } from "./interface";

function intToChar(int:number) {
    const base = 'A'.charCodeAt(0)
    return String.fromCharCode(base + int)
}
const makeSeatAvail = (dispatch:any) => {
    let seats: Seat[][] = Array(12).fill({}).map((row)=>new Array(12).fill({}));
    for (var i = 0;i<12;i++){
        for(var j =0;j<12;j++){
            var tmp: Seat = {
                id:intToChar(i)+(j+1).toString(),
                state: 0,
                booked: false,
            }
            seats[i][j] = tmp;
            // console.log(seats[i][j]);
        }
    }
    dispatch(setSeatStatus(seats))
}

const getAvailableShow = (mId: any,date: any,dispatch:any) => {
    const baseURL = "http://10.0.2.2:8080";
    axios.get(`${baseURL}/show/${mId}/${date}`)
    .then(
        (response) => {
            let Data = response.data;
            console.log(Data)
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


export {getAvailableShow,setSeatStatusURL,makeSeatAvail};