import {
    StyleSheet
} from 'react-native'

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        margin: 10,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderColor: '#E9ECF0',
    },
    date: {
        flex:1,
        alignItems: 'flex-start',
        fontSize: 12,
        fontFamily: 'NotoSans-Regular'
    },
    time: {
        flex:1,
        fontSize: 12,
        // justifyContent: 'flex-end',
        alignItems: 'flex-end',
        // borderWidth: 1,
    },
    text:{
        color: '#14171A',
        fontSize: 14,
        fontWeight: 600,
    }
})