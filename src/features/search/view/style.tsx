import {
    StyleSheet
} from 'react-native'

export const styles = StyleSheet.create({
    body: {
        margin:0,
    },
    header: {
        shadowOffset:{
            width:0,
            height:-5,
        },
        margin:0,
        shadowColor: '#555',
        elevation: 1,
        // borderWidth: 2,
        height: '40%',
    }
})