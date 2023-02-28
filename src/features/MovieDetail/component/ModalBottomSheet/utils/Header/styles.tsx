import {
    StyleSheet
} from 'react-native'

export const styles = StyleSheet.create({
    header: {
        padding: 16,
    },
    title: {
        fontSize: 18,
        color: '#14171A',
        fontFamily: 'NotoSans-SemiBold'
    },
    content: {
        fontSize: 14,
        color: '#14171A',
        paddingTop: 8,
        // borderWidth: 1,
        flexWrap: 'wrap',
    },
    bullet: {
        fontSize: 5,
    },
    icon: {
        // borderWidth: 1, 
        paddingTop: 12,
        paddingLeft: 8,

    },
    subTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
})