import { 
    View, 
    Text,
    FlatList,
    Pressable,
} from 'react-native'
import React from 'react'
import {styles} from './style'
// import BottomSheet from 'reanimated-bottom-sheet'
// import Animated from 'react-native-reanimated'

export default function TimeBoxShow({item}:any) {

    // const bs = React.createRef()
    // const fall = new Animated.Value(1)
    // const renderBottomSheet = () => {
    //     <View>
    //         <Text>Ram Ram ji</Text>
    //     </View>
    // }
  return (
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
            )
            }
        />
        {/* <BottomSheet 
            ref={bs}
            snapPoints = {[600,0]}
            initialSnap = {1}
            callbackNode = {fall}
            enabledGestureInteraction = {true}
            renderContent = {renderBottomSheet}

        /> */}
    </View>
  )
}