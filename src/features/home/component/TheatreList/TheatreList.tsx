import { 
    View,
    FlatList
} from 'react-native'
import React from 'react'
import CustomHeader from '../CustomHeader/CustomHeader'
import CustomView from '../CustomView/CustomView'
import { styles } from './styles'

const Data = [
  {
    name:'Urvashi Cinema Hall',
    comment: 'Shivaji Nagar',
    image: require('../../../../assets/images/UrvashiCinemaHall.png')
  },
  {
    name:'Inox',
    comment: '1mg Mall',
    image: require('../../../../assets/images/Theatre.png')
  },
  {
    name:'Cinepolis',
    comment: 'Herbal',
    image: require('../../../../assets/images/Theatre.png')
  }
  ,{
    name:'Matrix',
    comment: 'English',
    image: require('../../../../assets/images/Theatre.png')
  },
  {
    name:'Cinema Hall',
    comment: 'SLN Mall',
    image: require('../../../../assets/images/Theatre.png')
  }
  ,{
    name:'Cinema Hall',
    comment: 'SLN Mall',
    image: require('../../../../assets/images/Theatre.png')
  },
  {
    name:'Cinema Hall',
    comment: 'SLN Mall',
    image: require('../../../../assets/images/Theatre.png')
  },
  {
    name:'Cinema Hall',
    comment:'DLF Mall',
    image: require('../../../../assets/images/Theatre.png'),
  }
]

const getDoubleList = () => {
  var newData: any = []
  var dummyData = {
    name: 'Cinema Hall',
    comment: 'DLF Mall',
    image: require('../../../../assets/images/Theatre.png')
  }
  const len = Data.length;
  for (var i = 0 ;i<len;i+=2){
    var tmpList = []
    tmpList.push(Data[i])
    if(i+1==len){
      tmpList.push(dummyData)
    }else{
      tmpList.push(Data[i+1])
    }
    newData.push(tmpList)
  }
  return newData;
}

export default function TheaterList() {
  // console.log(newData[0][1].name)
  return (
    <View style = { styles.body }>
        <CustomHeader title = "Theatres"/>
        <FlatList 
          data = {getDoubleList()}
          horizontal
          showsHorizontalScrollIndicator = {false}
          // numColumns={2}
          renderItem={
            ({item}) => 
            <View>
              <CustomView item={item[0]}/>
              <CustomView item={item[1]}/>
            </View>
              // <View>
                // <CustomView item = {item[0]}/>
                // {/* <CustomView item = {item[1]}/> */}
              // </View>
          }
        />
    </View>
  )
}
