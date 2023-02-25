import { 
    View, 
    Text,
    FlatList,
    Pressable,
} from 'react-native'
import React from 'react'
import { styles } from './style'

export default function MovieTimingShow ({makeTheatreTimingData}) {
  return (
    <FlatList 
        data={makeTheatreTimingData()}
        keyExtractor = {(item,index) => index.toString()}
        showsVerticalScrollIndicator = {false}
        // horizontal
        // contentContainerStyle = {{paddingHorizontal : 10}
        renderItem = {
          ({item})=>(
            <View>
              <Text style = {styles.header}>{item.title}, {item.location}</Text>
              <FlatList 
                data = {item.data}
                horizontal
                showsHorizontalScrollIndicator = {false}
                renderItem = {
                  ({item})=>(
                    <Pressable style = {styles.container}>
                      <Text style = {styles.text}>{item}</Text>
                    </Pressable>
                    // console.log({item})
                  )
                }
              />
            </View>
          )
        }
      />
  )
}