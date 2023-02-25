import React from 'react'
import {
    Text,
    View,
} from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import {styles} from './style'

export const ShimmerCard = () => {
    return (
        <SkeletonPlaceholder>
            <View style = {styles.body}>
                <View style = {styles.image}>

                </View>
                <View style = {styles.content}>
                    <View style = {styles.title}>

                    </View>
                    <View style = {styles.title}>

                    </View>
                    <View style = {styles.comment}>

                    </View>
                </View>
            </View>
        </SkeletonPlaceholder>
        // <SkeletonPlaceholder>
        //     <View style={{ marginLeft: 20, marginTop: 20 }}>
        //     <View style={{ width: 350, height: 200 }} />
        //     <View style={{ marginTop: 6, width: 260, height: 20, borderRadius: 5 }} />
        //     <View style={{ marginTop: 6, width: 350, height: 70, borderRadius: 10 }} />
        //     </View>
        // </SkeletonPlaceholder>
    )
}
