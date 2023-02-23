import {
    StyleSheet,
} from 'react-native'

export const  styles = StyleSheet.create({
    body: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        borderWidth: 1,
        height: 38,
        width: 'auto',
        borderRadius: 18,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:  'space-between',
    },
    icon:{
        height: 13,
        width: 15,
        marginLeft: 11,
        marginRight: 11,
    },
    input: {
        flex:7,
        display: 'flex',
        width: 'auto',
    },
})