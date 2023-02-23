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
            <View id = "body" style = {styles.body}>
                <View id = "image" style = {styles.image}>

                </View>
                <View id = "content" style = {styles.content}>
                    <View id = "title" style = {styles.title}>

                    </View>
                    <View id = "subTitle" style = {styles.subTitle}>

                    </View>
                    <View id = "comment" style = {styles.comment}>

                    </View>
                </View>
            </View>
        </SkeletonPlaceholder>
    )
}
