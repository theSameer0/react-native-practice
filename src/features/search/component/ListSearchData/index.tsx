import { 
    View, 
    Text 
} from 'react-native'
import React from 'react'

export default function ListSearchData(props:any) {
  return (
    <View>
      <Text>{props.data}</Text>
    </View>
  )
}