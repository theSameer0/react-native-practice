import { View, Text, Image , Modal, Pressable } from 'react-native'
import React , {useEffect} from 'react'
import { styles } from './style'
import { useDispatch,useSelector } from 'react-redux'
import { setSuccessVisible } from '../redux/action'
import TicketGenerate from '../component/TicketGenerate/index'
import { ScrollView } from 'react-native-gesture-handler'

// const ticketSuccess = () => {
  
// }


export default function MyBookings({navigation,route}:any) {
  const dispatch = useDispatch();
  useEffect(() => {
    setVisibleTrue()
  }, [])
  const setVisibleTrue = () => {
    dispatch(setSuccessVisible(true))
  }
  const isVisible = useSelector((state:any) => state.bookingReducer.isVisible)
  const moveToTicket = () => {
    dispatch(setSuccessVisible(false))
  }
  const Data = useSelector((state:any)=>state.movieReducer.bookingMovieDetail)
  if(Data[0]===''){
    return (null)
  }
  return (
    <View>
      <Modal
        visible = {isVisible}
      >
        <Pressable onPress = {moveToTicket}>
          <Image style = {styles.success} source = {require('~/assets/images/ticketSuccess.png')} />
        </Pressable>
      </Modal>
        <TicketGenerate navigation = {navigation} route = {route}/>
        <View style = {styles.image}>
          <Image source={require('~/assets/images/qrCode.png')}/>
        </View>
    </View>
  )
}