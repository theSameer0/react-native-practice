import { useDispatch, useSelector } from "react-redux"
import { Ticket } from "./interface"
import axios from "axios"
import { getFailureData, getSuccessData } from "./action"

// const dispatch = useDispatch()
export const setTicketDetailsURL = (data:Ticket,dispatch:any) => {
    const baseURL = 'http://10.0.2.2:8080';
    console.log("Ticket:",data);
    axios({
        method: 'post',
        url: baseURL + '/ticket',
        data: data,
    })
    .then((response:any)=>{
        console.log(response.data)
        dispatch(getSuccessData(response.data))
    })
    .catch((err)=>{
        console.log("Ticket Error: ",err);
        dispatch(getFailureData(err))
    })
}
