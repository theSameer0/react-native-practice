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
    )
}
